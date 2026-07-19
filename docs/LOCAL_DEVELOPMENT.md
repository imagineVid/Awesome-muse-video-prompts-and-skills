# Local Development

## Requirements

- Node.js 24
- pnpm 9

## Commands

```bash
pnpm install
pnpm run validate
pnpm test
pnpm run typecheck
pnpm run generate
```

`validate` checks local schema, Muse Video model evidence, category assignment, attribution, source URLs, and duplicate fingerprints. `audit:duplicates` additionally downloads referenced media and compares visual hashes after prompt data exists.

## Data Flow

1. Place reviewed records in `data/prompts.json`.
2. Keep official Meta cases separate in `data/official-cases.json`.
3. Run `pnpm run generate`; README files are generated artifacts.
4. Commit source data, generator changes, and regenerated output together.

Raw API responses belong in ignored `data/research/`. Never commit API keys, cookies, proxy configuration, or bulk search caches.

## Approved Issue Sync

The GitHub workflow passes issue fields to the local sync script. For a local dry run, provide `ISSUE_NUMBER`, `ISSUE_BODY`, and `GITHUB_REPOSITORY=imagineVid/Awesome-muse-video-prompts-and-skills` without storing a real token in the repository.
