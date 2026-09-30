# Brand project starter

A repo for one brand project, from the brief to the landing page, set up so
you and any AI tool you work with can find everything. Each folder is one
stage of the process, numbered in the order you get to it. Every file starts
empty or with a template to fill in.

## Start here

1. Click **Use this template** (top of this page), then **Create a new
   repository**. Name it `art418-<lastname>`, set it to **Private**, and
   create it.
2. In GitHub Desktop: **File > Clone repository**, pick the new repo, clone it.
3. On GitHub, open **Settings > Collaborators** and add your instructor.
4. Fill in `ABOUT-ME.md` and `FOCUS.md` (three lines), commit, push.

## Already have a repo?

Move your work into the new one, then archive the old one.

| Your file | Goes to |
|---|---|
| `statement.md` | the Personal statement section of `ABOUT-ME.md` |
| `BRIEF.md` | `BRIEF.md` (replace the template) |
| `LOG.md` | `LOG.md` (keep your entries under the format block) |
| Your creative brief | paste the answers into `01-brief/creative-brief.md`, PDF to `decks/` |
| Audience and problem forms | `02-research/` |
| Deck, board and brief PDFs | `decks/`, renamed date first |

Commit once with the message "Move work into the starter repo". Your old
history stays in the old repo; link it in `LOG.md`.

## The map

| Folder | What goes in it | When |
|---|---|---|
| `ABOUT-ME.md` | Who you are, what you bring, how tools should work with you, your projects, your personal statement | now, and Dec 7 |
| `BRIEF.md` | The working brief: problem, objective, context, questions | September |
| `01-brief/` | The creative brief, nineteen sections | Sep 30 |
| `02-research/` | Audiences, competitors, sources, interviews | all term |
| `03-explorations/` | Moodboard index, brand themes, brand language | Oct 7, Oct 14 |
| `04-brand/` | The direction, the rules, the voice, the mark | Oct 19 to Nov 4 |
| `05-tokens/` | Exact values: color, type, spacing | Oct 21 |
| `06-book/` | The brand book | Nov 16, Dec 2 |
| `07-site/` | The landing page, built from the tokens | Nov 18 to Dec 2 |
| `decks/` | Every PDF you present or turn in, date first | every crit |
| `docs/` | Writing check, decisions, templates | all term |
| `LOG.md` | What you decided and what the machine did | every session |
| `FOCUS.md` | What you are working on right now | every session |

## Working with AI tools

Open the repo folder in the tool (Claude Code, Cursor, Codex, Copilot,
Gemini). The tool reads `AGENTS.md` first, then `ABOUT-ME.md` to learn who
you are and how you like to work; Claude Code reads it through
`CLAUDE.md`. That file tells it the rules of this repo:

- The brief is the source: every decision names the brief section it answers.
- It does not decide for you, and it does not invent research or sources.
- Exact values come from `05-tokens/`.
- Copy is written in the voice in `04-brand/voice.json`.
- Every session that used a tool ends with a line in `LOG.md`.

In Claude Code, four skills in `.claude/skills/` do the common jobs. Ask for
them by name or just describe the job:

| Skill | What it does |
|---|---|
| `write-in-voice` | Loads your voice and brief before writing any copy |
| `check` | Reads a draft against `docs/CHECK.md` and lists what to fix |
| `log-the-run` | Writes the `LOG.md` entry for the session |
| `trace-to-brief` | Shows which brief section each decision answers, and what answers nothing |

Tell the tool what you want in plain words. "Log this session." "Check the
tagline." "Does the moodboard answer the brief?"

## Files that stay out

Git is for text and small exports. `.gitignore` keeps out source files
(`.psd`, `.ai`, `.indd`, `.fig`, `.sketch`), video, and anything over a few
megabytes. Keep sources in Figma or your drive and put the link in the folder's
README. Other people's images are linked and credited in
`03-explorations/moodboard.md`, not copied here.

## Ownership

Your work in this repo is yours. Keep the repo private unless you choose to
show it. If your product belongs to a real company, ask before you publish
their name or marks. The template itself is free to reuse (see `LICENSE`).
