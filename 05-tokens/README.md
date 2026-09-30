# 05-tokens

The brand's exact values, in the W3C Design Tokens format (DTCG 2025.10), the
format Figma, Tokens Studio and Style Dictionary read. Each token has a
`$type`, a `$value` and a `$description` that says what it is for.

- `color.json`, `typography.json`, `spacing.json`: the values.
- `tokens.css`: the same values as CSS variables, which the site uses.

**Keep the two in step.** Change a value in the JSON, then change it in
`tokens.css` in the same commit. (If you want this automated later, Style
Dictionary builds the CSS from the JSON; ask for it at the build sessions.)

Name tokens by role (`color.surface`, `color.action`), not by look
(`color.blue`). The role is the rule; the look can change.
