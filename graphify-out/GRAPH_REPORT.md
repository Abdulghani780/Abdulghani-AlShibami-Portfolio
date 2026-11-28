# Graph Report - Abdulghani-AlShibami-Portfolio  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 1721 nodes · 3368 edges · 102 communities (75 shown, 27 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 131 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e5f0083e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- validate_data.py
- ShadcnInstaller
- scripts/core.py
- next
- design_system.py
- gray
- index.ts
- project.ts
- cip/core.py
- slide_search_core.py
- react
- spacing
- csv
- icon/generate.py
- [slug]/page.tsx
- pathlib
- html-token-validator.py
- core-domain.test.mjs
- package.json
- generate-slide.py
- projects/page.tsx
- steps
- read_rows
- TestStyleTaxonomy
- credentials.ts
- cn
- argparse
- json
- TestTailwindConfigGenerator
- test_design_system_mode.py
- color
- DesignSystemGenerator
- steps
- dependencies
- compilerOptions
- cip/generate.py
- fontSize
- embed-tokens.cjs
- CatalogRefreshTest
- lucide-react
- extract-colors.cjs
- validate-asset.cjs
- TailwindConfigGenerator
- TestWebStackFreshness
- design-tokens-starter.json
- .test_node_check_parses_generated_config
- TestDomainDetection
- TestSearchDomains
- render-html.py
- validate-tokens.cjs
- card
- inject-brand-context.cjs
- primitive
- TestNativeDesktopStackFreshness
- sync-brand-to-tokens.cjs
- generate-tokens.cjs
- button
- _select_palette_for_mode
- parse_decision_rules
- CanonicalProjectsBento.tsx
- ThemeProvider.tsx
- input
- radius
- CertificateModal.tsx
- _filter_anti_patterns_for_mode
- TestThresholdGate
- Button
- scripts
- shadow
- TestTokenizer
- split_values
- TestLandingAndStackContract
- vercel.json
- $type
- radius
- lg
- TestBm25CoreBehavior
- padding-y
- xl
- md
- none
- TestFixtureValidation
- next.config.ts
- destructive
- destructive-foreground
- muted
- primary-foreground
- ring
- secondary-foreground
- sitemap.ts
- extends
- middleware.ts
- pnpm
- postcss.config.mjs

## God Nodes (most connected - your core abstractions)
1. `react` - 80 edges
2. `TailwindConfigGenerator` - 58 edges
3. `next` - 42 edges
4. `ScrollReveal()` - 39 edges
5. `TestTailwindConfigGenerator` - 35 edges
6. `DesignSystemGenerator` - 35 edges
7. `ShadcnInstaller` - 34 edges
8. `Locale` - 31 edges
9. `Locale` - 27 edges
10. `TestShadcnInstaller` - 26 edges

## Surprising Connections (you probably didn't know these)
- `DemoPageProps` --references--> `Locale`  [EXTRACTED]
  app/[locale]/projects/[slug]/demo/page.tsx → types/project.ts
- `DemoViewerProps` --references--> `Project`  [EXTRACTED]
  components/features/demos/DemoViewer.tsx → types/project.ts
- `CanonicalFooterProps` --references--> `Locale`  [EXTRACTED]
  docs/archive/legacy-canonical/CanonicalFooter.tsx → lib/i18n/dictionaries.ts
- `CanonicalProjectsBentoProps` --references--> `Locale`  [EXTRACTED]
  docs/archive/legacy-canonical/CanonicalProjectsBento.tsx → lib/i18n/dictionaries.ts
- `LiveDemoStudioProps` --references--> `Locale`  [EXTRACTED]
  components/features/demos/LiveDemoStudio.tsx → types/project.ts

## Import Cycles
- 2-file cycle: `demos/registry/index.ts -> demos/simulations/CampusITTrackerSimulation.tsx -> demos/registry/index.ts`
- 2-file cycle: `demos/registry/index.ts -> demos/simulations/NovaTechSimulation.tsx -> demos/registry/index.ts`
- 2-file cycle: `demos/registry/index.ts -> demos/simulations/GpSimulation.tsx -> demos/registry/index.ts`
- 2-file cycle: `demos/registry/index.ts -> demos/simulations/CafenaSimulation.tsx -> demos/registry/index.ts`
- 2-file cycle: `demos/registry/index.ts -> demos/simulations/MetaAlgorithmLabSimulation.tsx -> demos/registry/index.ts`

## Communities (102 total, 27 thin omitted)

### Community 0 - "validate_data.py"
Cohesion: 0.06
Nodes (44): read_rows(), TestAccessibilityGuidance, TestChartsTypographyAndIcons, TestCurrentReactGuidance, TestSemanticColors, TestGeneratedCatalogContract, _catalog_date(), _check_app_interface_contract() (+36 more)

### Community 1 - "ShadcnInstaller"
Cohesion: 0.06
Nodes (3): main(), ShadcnInstaller, TestShadcnInstaller

### Community 2 - "scripts/core.py"
Cohesion: 0.06
Nodes (31): BM25, _contains_phrase(), detect_domain(), _domain_keywords(), _exact_match_diagnostic(), _exact_row_identity(), _exact_stack_identifier(), _file_signature() (+23 more)

### Community 3 - "next"
Cohesion: 0.10
Nodes (28): CredentialsPage(), PageProps, HOME_META, HomePage(), CredentialsCatalogView(), CredentialsCatalogViewProps, AbdulghaniMethodSection(), AboutSection() (+20 more)

### Community 4 - "design_system.py"
Cohesion: 0.05
Nodes (16): ansi_ljust(), _detect_page_type(), format_ascii_box(), format_markdown(), format_master_md(), format_page_override_md(), generate_design_system(), _generate_intelligent_overrides() (+8 more)

### Community 5 - "gray"
Cohesion: 0.05
Nodes (53): $type, $value, $type, $value, $type, $value, $type, $value (+45 more)

### Community 6 - "index.ts"
Cohesion: 0.07
Nodes (39): LiveDemoStudio(), LiveDemoStudioProps, DEMO_REGISTRY, DemoDefinition, DemoProps, DemoDisclosure(), DemoDisclosureProps, DemoShell() (+31 more)

### Community 7 - "project.ts"
Cohesion: 0.10
Nodes (20): CaseStudyHeroProps, DemoCalloutBannerProps, ProjectCard(), ProjectCardProps, ProjectCatalogView(), ProjectCatalogViewProps, ProjectFilters(), ProjectFiltersProps (+12 more)

### Community 8 - "cip/core.py"
Cohesion: 0.06
Nodes (13): BM25, detect_domain(), get_cip_brief(), _load_csv(), search(), search_all(), _search_csv(), BM25 (+5 more)

### Community 9 - "slide_search_core.py"
Cohesion: 0.08
Nodes (17): format_context(), format_result(), main(), BM25, calculate_pattern_break(), detect_domain(), get_background_config(), get_color_for_emotion() (+9 more)

### Community 10 - "react"
Cohesion: 0.12
Nodes (21): LocaleLayout(), AbdulghaniAIModal(), AbdulghaniAIModalProps, ChatMessage, Footer(), LocaleHtmlSync(), MainWrapper(), AsMonogram() (+13 more)

### Community 11 - "spacing"
Cohesion: 0.06
Nodes (34): $type, $value, $type, $value, $type, $value, $type, $value (+26 more)

### Community 12 - "csv"
Cohesion: 0.07
Nodes (5): TestMetricMath, read_rows(), read_rows(), TestTextLayoutDataContracts, TestTextLayoutRetrieval

### Community 13 - "icon/generate.py"
Cohesion: 0.10
Nodes (13): apply_color(), apply_viewbox_size(), extract_svgs(), generate_batch(), generate_icon(), generate_sizes(), load_env(), main() (+5 more)

### Community 14 - "[slug]/page.tsx"
Cohesion: 0.13
Nodes (22): ProjectDetailPage(), ProjectDetailPageProps, ArchitectureTopology(), ArchitectureTopologyProps, CaseStudyHero(), PROJECT_CONCEPT_IMAGES, CaseStudyMetrics(), CaseStudyMetricsProps (+14 more)

### Community 15 - "pathlib"
Cohesion: 0.13
Nodes (5): test_sync_parses_bundled_starter_template(), main(), _run(), test_flags_hardcoded_hex_sharing_line_with_token(), test_token_only_line_reports_no_violation()

### Community 16 - "html-token-validator.py"
Cohesion: 0.13
Nodes (12): get_context(), is_allowed_exception(), is_allowed_rgba(), is_inside_block(), load_css_variables(), main(), print_result(), print_summary() (+4 more)

### Community 17 - "core-domain.test.mjs"
Cohesion: 0.13
Nodes (14): ROOT_DIR, contactSchema, __dirname, __filename, rootDir, __dirname, __filename, rootDir (+6 more)

### Community 18 - "package.json"
Cohesion: 0.10
Nodes (25): devDependencies, autoprefixer@^10.4.20, eslint@^9.20.1, eslint-config-next@^15.2.0, postcss@^8.5.28, sharp@^0.35.5, tailwindcss@^3.4.17, @types/node@^22.13.4 (+17 more)

### Community 19 - "generate-slide.py"
Cohesion: 0.13
Nodes (11): _e(), generate_chart_slide(), generate_cta_slide(), generate_deck(), generate_metrics_slide(), generate_problem_slide(), generate_solution_slide(), generate_testimonial_slide() (+3 more)

### Community 20 - "projects/page.tsx"
Cohesion: 0.13
Nodes (14): ProjectsPage(), ProjectsPageProps, DemoPageProps, ProjectDemoPage(), DemoViewer(), DemoViewerProps, ChallengesResultsSectionProps, ProblemSolutionSection() (+6 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (21): NEXT_PUBLIC_DEFAULT_LOCALE, NEXT_PUBLIC_SITE_URL, jobs, validate, name, on, pull_request, push (+13 more)

### Community 22 - "read_rows"
Cohesion: 0.17
Nodes (3): _resolve_dial(), read_rows(), TestReasoningContract

### Community 23 - "TestStyleTaxonomy"
Cohesion: 0.11
Nodes (5): _query_wants_dark(), _resolve_color_mode(), _style_is_dark_primary(), TestModeResolution, TestStyleTaxonomy

### Community 24 - "credentials.ts"
Cohesion: 0.15
Nodes (16): ChatRequestSchema, checkRateLimit(), generateOfflineResponse(), ipRequestTimestamps, POST(), buildSystemPrompt(), CredentialCategory, Signatory (+8 more)

### Community 25 - "cn"
Cohesion: 0.20
Nodes (12): ShowcasePage(), ProjectPreviewGraphic(), ProjectPreviewGraphicProps, LanguageSwitcher(), Navbar(), ThemeToggle(), AsLogo(), AsLogoProps (+4 more)

### Community 26 - "argparse"
Cohesion: 0.12
Nodes (6): format_brief(), format_results(), main(), format_output(), generate_design_brief(), main()

### Community 27 - "json"
Cohesion: 0.16
Nodes (9): generate_css_for_background(), get_background_image(), get_curated_images(), get_overlay_css(), get_pexels_search_url(), load_backgrounds_config(), load_brand_colors(), main() (+1 more)

### Community 29 - "test_design_system_mode.py"
Cohesion: 0.15
Nodes (5): _contrast_ratio(), _palette_is_dark(), _relative_luminance(), TestEndToEndCoherence, TestLuminance

### Community 30 - "color"
Cohesion: 0.11
Nodes (19): $type, $value, background, foreground, muted-foreground, primary, primary-hover, secondary (+11 more)

### Community 32 - "steps"
Cohesion: 0.11
Nodes (18): jobs, validate-migrations, name, on, pull_request, push, branches, paths (+10 more)

### Community 33 - "dependencies"
Cohesion: 0.11
Nodes (18): dependencies, clsx@^2.1.1, @google/genai@^2.23.0, lenis@^1.3.26, lucide-react@^0.475.0, next@^15.2.0, react@^19.0.0, react-dom@^19.0.0 (+10 more)

### Community 34 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 35 - "cip/generate.py"
Cohesion: 0.19
Nodes (7): build_cip_prompt(), check_logo_required(), generate_cip_set(), generate_with_nano_banana(), load_env(), load_logo_image(), main()

### Community 36 - "fontSize"
Cohesion: 0.12
Nodes (16): $type, $value, $type, $value, $type, $value, $type, $value (+8 more)

### Community 38 - "embed-tokens.cjs"
Cohesion: 0.14
Nodes (8): args, fs, minimal, MINIMAL_TOKENS, path, projectRoot, tokensPath, wrapStyle

### Community 40 - "lucide-react"
Cohesion: 0.21
Nodes (10): ContactForm(), FieldErrors, validate(), ContactToolbar(), DemoToolbarProps, CanonicalFooter(), CanonicalFooterProps, SOCIAL_LINKS (+2 more)

### Community 41 - "extract-colors.cjs"
Cohesion: 0.22
Nodes (11): calculateCompliance(), colorDistance(), displayPalette(), extractHexColors(), findNearestBrandColor(), fs, generateImageMagickCommand(), hexToRgb() (+3 more)

### Community 42 - "validate-asset.cjs"
Cohesion: 0.25
Nodes (13): checkManifest(), formatBytes(), formatOutput(), fs, main(), parseFilename(), path, RULES (+5 more)

### Community 45 - "design-tokens-starter.json"
Cohesion: 0.15
Nodes (12): component, $type, $value, dark, semantic, $schema, $type, $value (+4 more)

### Community 49 - "render-html.py"
Cohesion: 0.23
Nodes (4): generate_html(), get_deliverable_info(), get_image_base64(), main()

### Community 50 - "validate-tokens.cjs"
Cohesion: 0.24
Nodes (11): extensions, formatReport(), fs, getFiles(), main(), parseArgs(), path, patterns (+3 more)

### Community 51 - "card"
Cohesion: 0.20
Nodes (12): $type, $value, bg, bg, padding, shadow, card, bg (+4 more)

### Community 52 - "inject-brand-context.cjs"
Cohesion: 0.31
Nodes (10): extractColorsFromTable(), extractCoreAttributes(), extractHexColors(), extractImageStyle(), extractTypography(), extractVoice(), fs, generatePromptAddition() (+2 more)

### Community 53 - "primitive"
Cohesion: 0.18
Nodes (11): fast, normal, slow, $type, $value, $type, $value, primitive (+3 more)

### Community 55 - "sync-brand-to-tokens.cjs"
Cohesion: 0.29
Nodes (8): adjustBrightness(), { execFileSync }, extractColorsFromMarkdown(), fs, generateColorScale(), main(), path, updateDesignTokens()

### Community 56 - "generate-tokens.cjs"
Cohesion: 0.36
Nodes (9): flattenTokens(), fs, generateCSS(), generateTailwind(), main(), parseArgs(), path, resolveReference() (+1 more)

### Community 57 - "button"
Cohesion: 0.20
Nodes (10): fg, font-size, hover-bg, button, $type, $value, $type, $value (+2 more)

### Community 60 - "_select_palette_for_mode"
Cohesion: 0.29
Nodes (3): _derive_dark_palette(), _select_palette_for_mode(), TestPaletteSelection

### Community 61 - "parse_decision_rules"
Cohesion: 0.27
Nodes (4): apply_decision_rules(), _object_without_duplicates(), parse_decision_rules(), _validate_action()

### Community 62 - "CanonicalProjectsBento.tsx"
Cohesion: 0.24
Nodes (9): AlgoCircle(), BADGE_COLORS, BENTO_METRICS, BENTO_SLUGS, CanonicalProjectsBento(), CanonicalProjectsBentoProps, Project, PROJECTS (+1 more)

### Community 63 - "ThemeProvider.tsx"
Cohesion: 0.28
Nodes (6): metadata, RootLayout(), Theme, ThemeContext, ThemeContextType, ThemeProvider()

### Community 64 - "input"
Cohesion: 0.29
Nodes (8): padding-x, input, $type, $value, focus-ring, padding-x, $type, $value

### Community 65 - "radius"
Cohesion: 0.29
Nodes (8): $type, $value, $type, $value, radius, default, full, default

### Community 69 - "CertificateModal.tsx"
Cohesion: 0.36
Nodes (6): CertificateCard(), CertificateCardProps, CertificateModal(), CertificateModalProps, CertificationCredential, VerifiedCertificate

### Community 73 - "Button"
Cohesion: 0.48
Nodes (4): LocaleNotFound(), NotFound(), Button, ButtonProps

### Community 74 - "scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, lint, start, test, typecheck

### Community 75 - "shadow"
Cohesion: 0.47
Nodes (6): sm, shadow, sm, sm, $type, $value

### Community 77 - "split_values"
Cohesion: 0.47
Nodes (3): split_values(), style_identities(), TestStyleIdentityContract

### Community 79 - "vercel.json"
Cohesion: 0.33
Nodes (5): buildCommand, framework, headers, installCommand, $schema

### Community 80 - "$type"
Cohesion: 0.60
Nodes (5): $type, $value, border, border, border

### Community 81 - "radius"
Cohesion: 0.60
Nodes (5): radius, radius, radius, $type, $value

### Community 82 - "lg"
Cohesion: 0.60
Nodes (5): lg, $type, $value, lg, lg

### Community 84 - "padding-y"
Cohesion: 0.67
Nodes (4): padding-y, padding-y, $type, $value

### Community 85 - "xl"
Cohesion: 0.67
Nodes (4): xl, xl, $type, $value

### Community 86 - "md"
Cohesion: 0.67
Nodes (4): $type, $value, md, md

### Community 87 - "none"
Cohesion: 0.67
Nodes (4): $type, $value, none, none

### Community 89 - "next.config.ts"
Cohesion: 0.50
Nodes (3): cspHeader, nextConfig, securityHeaders

### Community 90 - "destructive"
Cohesion: 0.67
Nodes (3): destructive, $type, $value

### Community 91 - "destructive-foreground"
Cohesion: 0.67
Nodes (3): destructive-foreground, $type, $value

### Community 92 - "muted"
Cohesion: 0.67
Nodes (3): muted, $type, $value

### Community 93 - "primary-foreground"
Cohesion: 0.67
Nodes (3): primary-foreground, $type, $value

### Community 94 - "ring"
Cohesion: 0.67
Nodes (3): ring, $type, $value

### Community 95 - "secondary-foreground"
Cohesion: 0.67
Nodes (3): secondary-foreground, $type, $value

### Community 99 - "pnpm"
Cohesion: 0.67
Nodes (3): postcss, pnpm, overrides

## Knowledge Gaps
- **1 isolated node(s):** `next/core-web-vitals`
  These have ≤1 connection - possible missing edges. (Counts symbols only; 672 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **27 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `TailwindConfigGenerator` connect `TailwindConfigGenerator` to `.write_config`, `.validate_config`, `.add_colors`, `._base_config`, `.add_plugins`, `.generate_config_string`, `.test_node_check_parses_generated_config`, `pathlib`, `argparse`, `.test_full_configuration_typescript`, `TestTailwindConfigGenerator`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `TailwindConfigGenerator` (e.g. with `TestGeneratedConfigIsValidJs` and `TestTailwindConfigGenerator`) actually correct?**
  _`TailwindConfigGenerator` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `next/core-web-vitals` to the rest of the system?**
  _1 weakly-connected nodes found - possible missing edges._
- **Should `validate_data.py` be split into smaller, more focused modules?**
  _Cohesion score 0.06202435312024353 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `dependencies`, `next`, `CertificateModal.tsx`, `index.ts`, `project.ts`, `lucide-react`, `Button`, `[slug]/page.tsx`, `package.json`, `projects/page.tsx`, `cn`, `CanonicalProjectsBento.tsx`, `ThemeProvider.tsx`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **Should `ShadcnInstaller` be split into smaller, more focused modules?**
  _Cohesion score 0.055178652193577565 - nodes in this community are weakly interconnected._
- **Why does `ShadcnInstaller` connect `ShadcnInstaller` to `pathlib`?**
  _High betweenness centrality (0.031) - this node is a cross-community bridge._