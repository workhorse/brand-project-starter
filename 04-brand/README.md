# 04-brand

The brand, written down so a person who has never met you, or a machine, can
follow it. Two kinds of rule:

- **Exact values** (colors, type sizes, spacing) go in `05-tokens/`.
- **Judgment calls** (when to use the mark, how the brand sounds, what it
  never does) go here, in words.

Both kinds get a rule in `rules.md`: an exact rule points at its token, a
judgment rule carries its own examples. `node scripts/check.mjs` checks them.

| File | What it holds | From |
|---|---|---|
| `direction.md` | The one direction you committed to, and why | Oct 19 |
| `rules.md` | Every rule, exact or judgment, each with Do, Because, Right and Wrong | Oct 19 on |
| `tests/` | What happened when a model was handed the rules, run by run | Oct 28 on |
| `voice.json` | How the brand sounds, in a form AI tools read | Oct 26 |
| `voice-queue.md` | Proposed voice changes, waiting for you to adopt them | Oct 26 on |
| `meta.json` | The brand's name, one-line summary and version | any time |
| `mark/` | The mark, exported as SVG and PNG, with a usage note | Nov 4 |
