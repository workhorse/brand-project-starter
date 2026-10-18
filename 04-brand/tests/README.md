# Tests

What happened when you handed your rules to an AI model. Each run gets one
file, named by date and model: `2026-10-28-claude.md`. The template is
`run-template.md`.

How a run works:

1. Give the model your rules, voice and tokens, and nothing else: no
   moodboards, no explaining.
2. Ask it for something your brand would really make: a homepage headline,
   a social post, a reply to an upset customer, a screen.
3. Read what comes back against each rule. Exact rules can be checked by
   looking at the values. Judgment rules are checked by you.
4. Every rule it broke is a rule that needs rewriting, or a rule that is
   missing. Change `rules.md`, commit, and run the same prompt again.

Keep every run, including the bad ones. They are the receipts behind the
AI note on each milestone.
