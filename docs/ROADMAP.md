# Roadmap

Where this starter is going. The aim is a brand project that a person and
any AI tool can work inside, where every decision traces to the brief, every
value has one home, and the system is checked and tested instead of hoped.

## Next

1. **A complete example brand**, invented and marked so on every file:
   brief, research, themes, direction, about fifteen rules, tokens with
   light and dark modes, voice, a test run, the book and the site. Lives in
   `examples/` so the template stays empty.
2. **Generated tokens.** Build `tokens.css` from the JSON (Style Dictionary
   or Terrazzo) instead of keeping it in step by hand. Add primitives with
   roles aliased to them, line height, weight, radius and motion, and modes.
3. **Checks on every push.** Run `scripts/check.mjs` in GitHub Actions, add
   a schema for `voice.json` and `meta.json`, and lint the tokens.
4. **A test harness for the rules.** A script that hands the rules and a
   fixed set of tasks to one or more models and writes dated runs into
   `04-brand/tests/`, with a pass count per rule.

## Later

- Export a `DESIGN.md` from the tokens and rules, for tools that read that
  format.
- Build the brand book in `06-book/` from the files, with specimens rendered
  from the tokens, so the book cannot drift from the system. Publish it and
  the site with GitHub Pages, plus an `llms.txt`.
- A skill for each stage: direction, rules, tokens, test, book, site.
- Voice: a tone-by-situation table, and a word list.
- Contributing guide, issue templates, tagged releases.
- Move the course calendar into one file, so other teachers and studios can
  use the starter with their own dates.
