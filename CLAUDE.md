# Project Context

## Stack

Bigcommerce, stencil 6.15.1, JQuery, SCSS

## Delegation rules (read this first)

- **Research, exploration, log digging → delegate to
  the `researcher` subagent.** Don't read entire
  directories, dependency trees, or log files inline in the main session.
- **Implementation, code writing, and any judgment call → do it directly in
  this session.** Don't delegate implementation to a subagent; that's what
  the main session's stronger model is for.
- If a task needs both: delegate the investigation first, get the summary,
  then implement directly once you have what you need.

## Conventions

- All JavaScript should be written inside the assets/js/theme/custom directory
- All SCSS should be written inside the assets/scss/custom directory
- If an HTML file needs to be edited and isn't in the templates/components/custom directory OR doesn't have `-OG.html` in the title, ask if it should be a new custom file inside the templates/components/custom directory or if the original HTML file should be duplicated with an `-OG.html` added to the title. If an `-OG.html` is added to the title of the duplicate, never edit the duplicate. Only edit the non `-OG.html` titled file.

## When compacting this session

Preserve: current task goal, files changed, commands already run, decisions made, next action.
Drop: old exploration paths, resolved errors, superseded plans.
