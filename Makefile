# profile-git — README-only repo; standard targets come from ~/dev-personal/common.mk.

projects: ## regenerate the README projects block from ~/dev-personal/projects.json (no-op when absent)
	bun scripts/projects.ts

-include $(HOME)/dev-personal/common.mk
