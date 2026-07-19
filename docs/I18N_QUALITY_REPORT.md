# Localization Quality Report

## Scope

- Source language: English (`README.md` and English JSON fields)
- Published locales: `es`, `pt`, `it`, `de`, `fr`, `ar`, `ja`, `ko`, `zh`, `nl`, `ru`, `tr`, `pl`
- Coverage per locale: 86 interface fields, 7 category titles, 6 workflow descriptions, and 5 complete prompt records
- Product links: English uses the verified `/reference-video` route; translated pages use the matching verified ImagineVid locale route

## Translation Trace

- Method: locale-isolated translation packets followed by source-to-target structural review
- External translation API: disabled
- Review owner: repository maintainer

## Quality Gates

- Every locale preserves the English object's keys and required values.
- Every prompt translation includes title, description, and full prompt content.
- Localized prompt pages display the reviewed translation and retain the creator's English source prompt in a collapsible block.
- Exact subject counts, dialogue, time cues, aspect ratios, URLs, and creator names remain intact.
- Bracketed production placeholders, model IDs, URLs, timecodes, aspect ratios, creator names, and character names remain intact.
- Script-family checks found no accidental Cyrillic, Arabic, CJK, Kana, or Hangul leakage into unrelated languages.
- Exact English prompt fallbacks, empty values, duplicate prompt IDs, duplicate sources, and duplicate media are rejected by validation.

## Review Notes

All locale packets were reviewed against the five English source records for missing actions, camera directions, dialogue, sound cues, counts, and continuity constraints. The final validator rejects missing IDs, empty fields, English fallbacks, duplicate sources, and duplicate media identities.

## Status

| Locale | Status | Review focus |
|---|---|---|
| es | pass | Spain usage, complete prompt instructions |
| pt | pass | Portugal usage, no Spanish leakage |
| it | pass | Natural creator terminology |
| de | pass | Complete directing and audio constraints |
| fr | pass | Natural production language |
| ar | pass | Modern Standard Arabic and valid JSON |
| ja | pass | Natural directing terminology and source fidelity |
| ko | pass | Long prompts rebuilt without summarization |
| zh | pass | Simplified Chinese and complete source coverage |
| nl | pass | Native workflow terminology |
| ru | pass | Script and source-content consistency |
| tr | pass | Natural production terminology |
| pl | pass | Native workflow terminology |

[PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
