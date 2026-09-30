# AGENTS.md

Instructions for any AI tool working in this repo (Claude Code, Codex, Cursor,
Copilot, Gemini). Claude reads it through `CLAUDE.md`. Keep it short; procedures
live in `.claude/skills/`.

This repo is one brand project: a product, the brief that frames it, the
research behind it, and the brand built to answer it. The student named in
`ABOUT-ME.md` owns every decision in it. Your job is to help them make and record those
decisions, not to make them.

## Read first, in this order

1. `FOCUS.md`: what is being worked on right now.
2. `ABOUT-ME.md`: who you are working with, what they know, and how they
   want you to work. Follow its "How I work with AI tools" section.
3. `BRIEF.md` and `01-brief/creative-brief.md`: the problem and the brief.
   Everything else in the repo answers to these two files.
4. The folder for the task at hand (map below).

## Non-negotiables

- **The brief is the source.** Every brand decision names the brief section
  it answers ("answers brief 5, Insight"). If a request has no brief section
  behind it, say so and ask before building it.
- **Do not decide for the student.** Never invent research, quotes, numbers,
  customers, competitors or sources. Never fill a brief section, a direction
  or a voice rule with your own guess. Mark anything unverified with `?`,
  offer options, and let the student choose.
- **Exact values live in `05-tokens/`.** Colors, type sizes, spacing and
  radii are read from tokens. Never hardcode a value in the site or a mockup.
- **Write in the brand's voice.** Read `04-brand/voice.json` before writing
  any copy. Do not edit `voice.json`; propose changes in
  `04-brand/voice-queue.md` and the student adopts them.
- **Say what the machine did.** Any session where you produced or changed
  work ends with an entry in `LOG.md` (use the `log-the-run` skill).
- **Credit every image.** Other people's images are linked and credited in
  `03-explorations/moodboard.md`, not copied into the repo.
- **Check prose before it ships.** Run the `check` skill on any copy you
  wrote. The rules are in `docs/CHECK.md`.

## Map

| Folder | What lives there | Used from |
|---|---|---|
| `ABOUT-ME.md` | The builder: profile, projects, personal statement | Aug, Dec |
| `BRIEF.md` | Working brief: assertions, context, hunches, questions | Sep |
| `01-brief/` | The creative brief (19 sections) | Sep 30 |
| `02-research/` | Audiences, competitors, sources, interviews | all term |
| `03-explorations/` | Moodboard (links + credits), themes, language | Oct 7, Oct 14 |
| `04-brand/` | The direction, voice, written rules, the mark | Oct 19 to Nov 4 |
| `05-tokens/` | Exact values as DTCG JSON, plus `tokens.css` | Oct 21 |
| `06-book/` | The brand book | Nov 16, Dec 2 |
| `07-site/` | The landing page, built from the tokens | Nov 18 to Dec 2 |
| `decks/` | Dated PDFs of every deck and board | every crit |
| `docs/` | Writing rules, decisions, templates | all term |
| `LOG.md` | Decisions and what the machine did | every session |

## How to work

- Small steps, one commit each, with a message that says what changed and why.
- When the student corrects your writing in a way that is a pattern, add it
  to `04-brand/voice-queue.md`.
- When a decision is made (a direction, a color, a cut), add a file in
  `docs/decisions/` using the template there.
- If a file you need is empty, say which one and ask. Do not fill it to keep
  going.
