# profile-git

GitHub profile README repo for wan-ilhami. Static content only: no code, no build, no tests, no dependencies.

## Paths
- `README.md` - the profile page (HTML + markdown, badges, About Me section).
- `typing-banner.svg`, `dev-working_rounded.gif` - images used by the README.
- `LICENSE`.
- `scripts/projects.ts` - `make projects` regenerates the block between `<!-- projects:start/end -->` from `~/dev-personal/projects.json` (no-op if the file is missing). Local only, no CI.

## Commands
Run `make` to list targets. `make projects` plus the shared ones from `~/dev-personal/common.mk`. There is no `make dev`, `make test` or `make verify`.

## Conventions
- Edit `README.md` (and `scripts/projects.ts`); keep image references valid. Repo is `wan-ilhami/wan-ilhami`, branch `master`. Private projects (tradingje) are never listed.

## Ports
None (`~/dev-personal/PORTS.md` lists it as a profile README repo).
