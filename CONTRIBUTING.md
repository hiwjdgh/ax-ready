# Contributing

## Principles

- Keep the skill concise.
- Prefer reusable templates and checklists over long prose.
- Make behavior safe for repositories with existing user changes.
- Document uncertainty instead of inventing project facts.

## Development Flow

1. Update `SKILL.md` for core workflow changes.
2. Update `references/` for detailed guidance.
3. Update `assets/templates/` for generated project artifacts.
4. If adding framework support, add a focused file under `references/frameworks/`.
5. Check that `SKILL.md`, `README.md`, and `AGENTS.md` still describe the same behavior.
6. For npm packaging changes, run `npm run check` and `npm pack --dry-run`.

## Pull Requests

Include a summary, validation notes, and any expected behavior changes for users invoking `$ax-ready`.
