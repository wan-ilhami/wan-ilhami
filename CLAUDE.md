# profile-git

GitHub profile README repo for wan-ilhami. Static content only: no code, no build, no tests, no dependencies.

## Paths
- `README.md` - the profile page (HTML + markdown, badges, About Me section).
- `typing-banner.svg`, `dev-working_rounded.gif` - images used by the README.
- `LICENSE`.
- `.env.production` is gitignored; do not print it.

## Commands
Run `make` to list targets. Only the shared ones exist, from `~/dev-personal/common.mk`: `make production-env` and `make vercel-login`. There is no `make dev`, `make test` or `make verify`.

## Conventions
- Edit `README.md` only; keep image references valid.

## Ports
None (`~/dev-personal/PORTS.md` lists it as a profile README repo).
