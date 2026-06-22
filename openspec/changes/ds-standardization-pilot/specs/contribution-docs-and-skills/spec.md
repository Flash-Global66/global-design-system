# contribution-docs-and-skills Specification

## Purpose

Defines the requirements for human-readable contribution documentation and LLM-first AI skills that codify the canonical architecture and Storybook documentation standards established in this pilot. The goal is to make the patterns reproducible without tribal knowledge — both for human contributors and AI coding agents.

---

## Requirements

### Requirement: Component Architecture Guide (Evolved)

The existing `stories/concepts/component-structure-guide.mdx` MUST be evolved (not replaced) to reflect the canonical architecture introduced by this pilot. It MUST be the single authoritative reference for "how to create a new component" in the design system.

The guide MUST cover:

| Section | Required content |
|---------|-----------------|
| Directory tree | Exact canonical layout (`src/{Name}.vue`, `composables/`, `props/`, `types/`, `constants/`, `styles/{name}.style.scss`) |
| g-utils imports | Which symbols come from `@flash-global66/g-utils` and why |
| BEM naming | How `useNamespace` and SCSS mixins work together, with examples |
| package.json | Required `sideEffects`, `exports` map, `main/module/types` fields |
| Testing | Where test files go (`tests/` mirroring `src/`), how to use `withSetup` |
| Out-of-scope signals | What does NOT belong in a component (theming, tokens, ConfigProvider) |

#### Scenario: Guide file exists and is discoverable in Storybook

- GIVEN the evolved `component-structure-guide.mdx`
- WHEN Storybook builds
- THEN the MDX page renders under the `Concept/Guide/` section without build errors

#### Scenario: Guide references g-utils, not element-plus

- GIVEN the evolved guide file
- WHEN the text is searched for import examples
- THEN utility and BEM helper imports point to `@flash-global66/g-utils`, not to `element-plus`

---

### Requirement: Storybook Documentation Guide (Evolved)

The existing `stories/concepts/components-documentation-guide.mdx` MUST be evolved to reflect the current stack (Vue 3.5, Storybook 8.6, g-utils) and the g-button component as a concrete reference example. It MUST remain the single authoritative reference for "how to write a component's Storybook story".

The guide MUST cover:

| Section | Required content |
|---------|-----------------|
| Story title convention | English section name (e.g., `Basic/Button`), kebab-case filename |
| Language rule | Descriptions and category names in Spanish; technical names (props, types) in English |
| Meta block | `title`, `component`, `parameters.docs.description.component`, `argTypes` structure |
| ArgTypes categories | Propiedades principales, Estilo y apariencia, Comportamiento, Eventos, Slots, Accesibilidad |
| Story types | Basic (controllable), Variants, AdvancedUsage — one story per meaningful state |
| Import pattern | Import from g-utils package, not from element-plus |
| Styles import | How to import `{name}/styles.scss` in the story file |

#### Scenario: Guide file exists and renders without build errors

- GIVEN the evolved `components-documentation-guide.mdx`
- WHEN Storybook builds
- THEN the page renders under `Concept/Guide/` without errors

---

### Requirement: AI Skill — Create Component

A LLM-first skill file MUST exist at `.ai/skills/create-component/SKILL.md` (or equivalent path for the design system's skill distribution). It MUST provide an AI coding agent with enough context to create a new design system component following the canonical architecture — without requiring the agent to read multiple files to discover patterns.

The skill MUST include:

| Section | Content required |
|---------|-----------------|
| Trigger description | When to activate (creating a new component, migrating a component) |
| Canonical file tree | Full directory structure with file responsibilities |
| g-utils usage | Which imports come from `@flash-global66/g-utils` and their signatures |
| BEM helper pattern | How to call `useNamespace` and which namespace to use |
| SCSS mixin pattern | `@use '@flash-global66/g-utils/mixins' as *` with b/e/m/when examples |
| Props file pattern | `buildProps()` call structure |
| Barrel export pattern | `withInstall` in `index.ts` |
| Backward-compat rule | No removal of existing props/emits/slots; no element-plus direct imports |
| References | Pointers to `component-structure-guide.mdx` and an existing component (button) as example |

#### Scenario: Skill file is LLM-readable and actionable

- GIVEN an AI agent that has loaded the skill
- WHEN it is asked to create a new component `<GTag>`
- THEN it can produce the correct file tree without asking the human for the file naming convention or import sources

#### Scenario: Skill does not prescribe HOW to implement logic

- GIVEN the skill content
- WHEN reviewed
- THEN it describes file roles and import sources (WHAT), not internal algorithm implementations (HOW)

---

### Requirement: AI Skill — Document Storybook Story

A LLM-first skill file MUST exist at `.ai/skills/document-story/SKILL.md` (or equivalent path). It MUST enable an AI agent to produce a correct, complete Storybook story for a design system component, following the standards in `components-documentation-guide.mdx`.

The skill MUST include:

| Section | Content required |
|---------|-----------------|
| Trigger description | When to activate (writing or reviewing a component's story) |
| Meta object structure | Required fields: `title`, `component`, `parameters.docs.description.component`, `argTypes` |
| Language rule | Spanish for human-facing text; English for code identifiers |
| Story export pattern | `Basic`, `Variants`, `AdvancedUsage` named exports with `name` and `parameters.docs.description.story` |
| ArgTypes category list | Exact category names in Spanish |
| Imports | Storybook types, the component, its prop types |
| Reference example | Pointer to button's story as a concrete example |

#### Scenario: Skill guides agent to correct argTypes categories

- GIVEN an AI agent with the document-story skill loaded
- WHEN it is asked to document `<GInput>`
- THEN the generated `argTypes` use the Spanish category names: `'Propiedades principales'`, `'Estilo y apariencia'`, `'Comportamiento'`, `'Eventos'`, `'Slots'`, `'Accesibilidad'`

#### Scenario: Skill file cites existing component as reference

- GIVEN the skill content
- WHEN searched for example references
- THEN it points to an existing component story (button or tag) as a concrete template, not an abstract placeholder

---

### Requirement: Skill Format — LLM-First

Both skill files MUST follow the LLM-first format established in `front-b2b/.ai/skills/vue-architecture-v3/SKILL.md`:

| Convention | Requirement |
|------------|-------------|
| YAML frontmatter | `name`, `description` (trigger description), optionally `disable-model-invocation` |
| Concise prose | No filler text; every sentence is actionable guidance |
| Reference tables | Prefer tables over bullet lists for pattern→file mappings |
| References section | List any companion files the agent MUST load before implementing |
| No code output | Skills describe patterns, they do not contain implementation code |

#### Scenario: Skills have valid YAML frontmatter

- GIVEN either skill file
- WHEN its YAML frontmatter is parsed
- THEN `name` and `description` fields are present and non-empty

#### Scenario: Skill description enables auto-invocation

- GIVEN the skill's `description` field
- WHEN an AI agent matches it against a user prompt about creating a component or writing a story
- THEN the agent can determine whether to load the skill without reading the full file body
