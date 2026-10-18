# Rules

Every decision in the brand, written so someone who has never met you can
follow it: a person or an AI tool. One rule per heading, and every rule has
four parts:

- **Do:** what to do, in one sentence.
- **Because:** the decision or the brief section it came from.
- **Right:** one example that follows it.
- **Wrong:** one example that breaks it.

Three questions for every rule: could someone who never met you follow it,
could you tell if they broke it, and does it name where it came from? A rule
that fails one of them is not finished.

Rules come in two kinds. **Exact rules** point at a token in `05-tokens/`,
so a script can check them. **Judgment rules** stay in words, and a person
checks them.

The two rules under "Examples" belong to an invented budgeting app, made up
for class. Read them, then delete that section and write your own.
`node scripts/check.mjs` skips it while it is there.

---

## Exact rules

### (Rule name)

- **Do:** 
- **Token:** (the token this rule points at, for example `color.action`)
- **Because:** 
- **Right:** 
- **Wrong:** 

## Judgment rules

### (Rule name)

- **Do:** 
- **Because:** 
- **Right:** 
- **Wrong:** 

---

## Examples (invented, delete these)

### Red means overspent, and nothing else

- **Do:** Use `color.alert` only for money the student has overspent. Every
  other part of every screen is `color.ink` on `color.surface`.
- **Token:** `color.alert`
- **Because:** The direction, "calm and plain." Brief 5, Insight: students
  feel judged by cheerful, colorful budgeting apps.
- **Right:** A food budget of $60 with $72 spent: the $12 over is in red, and
  the rest of the line is ink.
- **Wrong:** A red "Save now" button, or a red badge on a new feature.

### Say what happened, in one plain sentence

- **Do:** Report what happened to the money in one sentence, with the number
  in it. Never use an exclamation mark, and never cheer.
- **Because:** The direction: it talks like a friend who is good with money.
  Brief 10, Tone: plain, and never preachy.
- **Right:** "You spent $42 on food this week."
- **Wrong:** "Whoa! Big week for snacks!"
