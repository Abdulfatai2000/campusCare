# Mandatory Git workflow

1. Check `git status` and verify the target branch before every change.
2. Commit each complete file or small logical change as soon as it can be reviewed and validated; never accumulate an entire development phase into a single commit.
3. Stage only intended files, with Conventional Commit messages (e.g. `feat: add student dashboard`, `fix: validate upload ownership`, `docs: update API contract`).
4. Do not commit `.env.local`, secrets, API keys, `node_modules`, or build outputs.
5. Do not use force pushes or destructive history changes.
6. Run `npm run typecheck`, `npm run lint`, and `npm run build` before calling a milestone complete.
7. Push only validated milestones to the configured branch. If checks fail, fix, commit, and rerun.
8. Keep the current architecture and document meaningful decisions rather than recreating previously completed work.

The initial scaffold was created in logical multi-file commits. Future small edits should have appropriately scoped commits.
