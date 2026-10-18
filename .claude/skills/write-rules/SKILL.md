---
name: write-rules
description: Use when the student is writing or revising the direction or the rules in 04-brand, or asks for help turning a decision into a rule. Interviews the student and writes their answers into the four-part rule shape. Never invents a decision.
---

# Write rules

1. Read `BRIEF.md`, `01-brief/creative-brief.md`, `04-brand/direction.md`
   and `04-brand/rules.md`. If the direction is empty, stop and say so: rules
   come from a chosen direction.
2. Ask the student which decision the rule is about. One rule per decision.
3. Decide with them whether it is an **exact rule** (it points at a value in
   `05-tokens/`) or a **judgment rule** (it stays in words). If an exact rule
   needs a token that does not exist yet, say which one and let them add it.
4. Ask for each part in the student's own words: Do, Because (the brief
   section, quoted, or the direction), Right, Wrong. Offer at most two
   wordings to choose from; never fill a part with your own guess.
5. Test the rule with the three questions, out loud: could someone who
   never met them follow it, could they tell if it was broken, does it name
   where it came from? If not, say which question it fails.
6. Write it under the right heading in `rules.md`, run
   `node scripts/check.mjs`, and fix what it reports.
7. End with the `log-the-run` skill.
