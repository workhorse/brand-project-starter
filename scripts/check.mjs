#!/usr/bin/env node
// Checks the brand system against its own rules. Run: node scripts/check.mjs
// Needs Node 18 or later and nothing else. Exits 1 if anything fails.

import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const read = (p) => readFileSync(join(root, p), 'utf8')
let failed = 0
const pass = (msg) => console.log(`  ok    ${msg}`)
const fail = (msg) => { failed++; console.log(`  FAIL  ${msg}`) }
const note = (msg) => console.log(`  note  ${msg}`)

// Tokens: flatten every DTCG file into { 'color.ink': { type, value, description } }.
const tokenFiles = readdirSync(join(root, '05-tokens')).filter((f) => f.endsWith('.json') && f !== 'contrast.json')
const tokens = {}
const walk = (node, path, inheritedType, file) => {
  const type = node.$type ?? inheritedType
  if ('$value' in node) { tokens[path.join('.')] = { type, value: node.$value, description: node.$description, file }; return }
  for (const [key, child] of Object.entries(node)) {
    if (!key.startsWith('$') && child && typeof child === 'object') walk(child, [...path, key], type, file)
  }
}
console.log('\nTokens')
for (const f of tokenFiles) {
  try { walk(JSON.parse(read(`05-tokens/${f}`)), [], undefined, f) } catch (e) { fail(`${f} is not valid JSON: ${e.message}`) }
}
for (const [name, t] of Object.entries(tokens)) {
  if (!t.type) fail(`${name} (${t.file}) has no $type`)
  if (!t.description) fail(`${name} (${t.file}) has no $description saying what it is for`)
}
pass(`${Object.keys(tokens).length} tokens read from ${tokenFiles.join(', ')}`)

// tokens.css has to say the same thing as the JSON.
const cssValue = (t) => {
  const v = t.value
  if (t.type === 'color') return (v.hex ?? v).toString().toUpperCase()
  if (t.type === 'dimension') return `${v.value}${v.unit}`
  if (t.type === 'fontFamily') return Array.isArray(v) ? v.join(', ') : v
  return typeof v === 'object' ? JSON.stringify(v) : String(v)
}
const css = read('05-tokens/tokens.css')
const vars = Object.fromEntries([...css.matchAll(/--([\w-]+)\s*:\s*([^;]+);/g)].map((m) => [m[1], m[2].trim()]))
for (const [name, t] of Object.entries(tokens)) {
  const v = name.replace(/\./g, '-')
  if (!(v in vars)) { fail(`tokens.css is missing --${v} (${name})`); continue }
  const want = cssValue(t)
  const have = t.type === 'color' ? vars[v].toUpperCase() : vars[v]
  if (have !== want) fail(`--${v} is ${vars[v]} in tokens.css but ${want} in ${t.file}`)
}
for (const v of Object.keys(vars)) {
  if (!(v.replace(/-/g, '.') in tokens) && !Object.keys(tokens).some((n) => n.replace(/\./g, '-') === v)) fail(`tokens.css has --${v}, which no JSON file defines`)
}
if (!failed) pass('tokens.css matches the JSON')

// Contrast: every pair in contrast.json has to reach its minimum (WCAG 2).
console.log('\nContrast')
const lum = (hex) => {
  const c = hex.replace('#', '').match(/../g).map((x) => parseInt(x, 16) / 255).map((x) => (x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4))
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]
}
if (existsSync(join(root, '05-tokens/contrast.json'))) {
  for (const p of JSON.parse(read('05-tokens/contrast.json')).pairs) {
    const [fg, bg] = [tokens[p.text], tokens[p.on]]
    if (!fg || !bg) { fail(`contrast pair ${p.text} on ${p.on} names a token that does not exist`); continue }
    const [a, b] = [lum(cssValue(fg)), lum(cssValue(bg))]
    const ratio = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05)
    const min = p.min ?? 4.5
    const line = `${p.text} on ${p.on}: ${ratio.toFixed(2)} to 1 (needs ${min})`
    ratio >= min ? pass(line) : fail(line)
  }
} else note('no 05-tokens/contrast.json, so no contrast pairs were checked')

// The site and the book read every value from tokens.
console.log('\nSite')
for (const dir of ['07-site', '06-book']) {
  if (!existsSync(join(root, dir))) continue
  for (const f of readdirSync(join(root, dir)).filter((x) => x.endsWith('.css'))) {
    const body = read(`${dir}/${f}`).replace(/\/\*[\s\S]*?\*\//g, '')
    const hits = [...body.matchAll(/#[0-9a-fA-F]{3,8}\b|(?<![\w-])\d*\.?\d+(px|rem|em|pt)\b/g)].map((m) => m[0])
    hits.length ? fail(`${dir}/${f} types values by hand instead of using tokens: ${[...new Set(hits)].join(', ')}`) : pass(`${dir}/${f} uses only tokens`)
  }
}

// Rules: every written rule has all four parts, and exact rules point at a real token.
console.log('\nRules')
const rulesText = read('04-brand/rules.md').split(/^## Examples/m)[0]
let kind = null
let count = 0
for (const block of rulesText.split(/^(?=##+ )/m)) {
  const head = block.match(/^(##+) (.*)/)
  if (!head) continue
  if (head[1] === '##') { kind = /exact/i.test(head[2]) ? 'exact' : /judgment/i.test(head[2]) ? 'judgment' : null; continue }
  if (!kind || head[2].includes('(Rule name)')) continue
  count++
  const part = (label) => (block.match(new RegExp(`\\*\\*${label}:\\*\\*([^\\n]*(?:\\n(?!- \\*\\*)[^\\n]+)*)`)) || [])[1]?.trim()
  const problems = []
  const missing = ['Do', 'Because', 'Right', 'Wrong'].filter((l) => !part(l))
  if (missing.length) problems.push(`is missing ${missing.join(', ')}`)
  if (kind === 'exact') {
    const tok = part('Token')?.match(/`([^`]+)`/)?.[1] ?? part('Token')
    if (!tok) problems.push('is an exact rule with no Token')
    else if (!(tok in tokens)) problems.push(`points at ${tok}, which is not in 05-tokens`)
  }
  problems.length ? problems.forEach((p) => fail(`"${head[2]}" ${p}`)) : pass(`"${head[2]}" (${kind})`)
}
count ? note(`${count} rules written`) : note('no rules written yet; the template blocks are skipped')

// The log: the evidence behind every AI note.
console.log('\nLog')
const entries = [...read('LOG.md').matchAll(/^## (\d{4}-\d{2}-\d{2})/gm)].map((m) => m[1])
entries.length ? pass(`${entries.length} log entries, newest ${entries.sort().at(-1)}`) : note('LOG.md has no entries yet')

console.log(failed ? `\n${failed} problem${failed > 1 ? 's' : ''} to fix.\n` : '\nEverything checks out.\n')
process.exit(failed ? 1 : 0)
