---
name: log-the-run
description: Use at the end of any session where an AI tool made or changed work in this repo, or when the student asks to log. Adds the two-line entry to LOG.md that every milestone's AI note is built from.
---

# Log the run

1. Look at what changed this session (`git status`, `git diff`).
2. Ask the student what they decided, if it is not clear from the session.
3. Add an entry at the top of `LOG.md`, under today's date:

       ## YYYY-MM-DD
       Decided: (one line, in the student's words)
       Machine: (tool, what it made or changed, what was kept, what was thrown out)

4. If a decision was made, suggest a file in `docs/decisions/`.
5. Update `FOCUS.md` if what they are working on has changed.
6. Suggest a commit message that says what changed and why.
