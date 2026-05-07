# Experience-First AI Profile Redesign

## Purpose

Redesign the homepage so a big-tech AI/ML platform recruiter quickly reads Sasidhar Kasturi as a hands-on AI engineering leader who drives AI transformation, not only a manager and not only an individual builder. The page should feel professional, restrained, and evidence-led.

## Audience

Primary audience: recruiters and hiring teams for AI/ML leadership roles at big tech or AI platform companies.

Secondary audience: senior engineering leaders evaluating technical depth, team scale, applied AI judgment, and transformation leadership.

## Positioning

Primary headline:

> Hands-on AI engineering leader

Supporting line:

> Driving AI transformation through model platforms, agentic systems, and applied AI capabilities across Microsoft Azure AI and J.P. Morgan.

The page should avoid coined or overly promotional phrasing such as "AI platform builder-leader" in the visible headline. "Hands-on AI engineering leader" is direct and credible; the supporting line and experience section should bring AI transformation front and center.

## Information Hierarchy

1. Compact identity area with name, role positioning, contact, LinkedIn, GitHub, and focus areas.
2. Short hero statement with the headline and one supporting sentence centered on AI transformation.
3. Proof chips that prime the recruiter before the timeline:
   - 250+ engineers
   - 0 to 37 team build
   - LLM customization
   - AI transformation
4. Experience as the main content surface.
5. Education and Engagement as secondary sections.

GitHub should be a supporting link only. Do not add a "Selected AI Work" or project showcase section. Public AI-related repositories and private AI experiments can inform the overall positioning, but the visible page should not mention private repository names. The public story should be transformation-led, with GitHub serving as corroborating evidence of hands-on AI fluency.

## Layout

### Desktop

Keep the left rail, but reduce the visual gap between the sidebar and main content. The current layout centers the main column inside the remaining viewport and creates a 240px gap at a 1440px desktop viewport. The redesign should keep the desktop gap near 72px to 112px while preserving readable line lengths.

The main column should start with a compact hero and then move quickly into Experience. The first viewport should show the top identity, headline, AI transformation-oriented supporting line, proof chips, and the beginning of Experience.

### Mobile

Replace the tall sidebar-first mobile rendering with a compact top profile block:

- small profile image
- name
- "Hands-on AI engineering leader"
- inline links for LinkedIn, GitHub, and Email

Experience should render as stacked, readable entries instead of a cramped two-column timeline. Each entry should show date, company, role/scope, and a concise impact line.

## Content Treatment

### Hero

Keep the hero short. Avoid paragraph-heavy marketing copy. The header should not try to explain the full career story, but it must make AI transformation visible before the recruiter reaches the timeline.

### Experience

Experience is the main proof. Each role should become more usable than the current one-line entries by showing:

- technical substance
- leadership scope
- platform or product impact
- transformation or business relevance where credible

The current J.P. Morgan role is underpowered because it only states the name and title. It should communicate AI transformation as the core charter, including applied AI for Global Private Bank, regulated enterprise context, and AI startup/platform evaluation without overclaiming.

The Microsoft Azure AI Platform role should explicitly surface model customization, fine-tuning, distillation, platform partnerships, team scale, and how that work enabled AI platform transformation.

The AzureML India role should surface the 0 to 37 team build and charter creation.

Earlier Microsoft roles should stay concise but show credible builder depth: AutoML, Cortana Skills Platform, Bing relevance, and ML/NLP systems.

## Visual Style

Maintain a professional, minimal, Apple-like aesthetic, but increase recruiter scan value:

- crisp headings
- slightly stronger contrast for important content
- proof chips or compact metrics
- more structured experience entries
- AI transformation as a visible first-screen concept
- no heavy cards inside cards
- no decorative gradients or visual noise

## Links

Add GitHub to the contact/link area:

`https://github.com/skasturi`

Keep LinkedIn and email. GitHub should not compete with Experience.

## Testing And Verification

Update or add Playwright coverage for:

- headline text is visible
- GitHub link exists and points to `https://github.com/skasturi`
- proof chips are visible
- AI transformation is visible in the first viewport
- J.P. Morgan experience includes usable AI transformation content
- Azure AI Platform experience includes LLM/model customization content
- desktop main content is closer to the sidebar than the current 240px gap
- mobile sidebar collapses into a compact top profile block
- mobile experience entries are stacked and readable

Use screenshots at desktop and mobile sizes to verify spacing, hierarchy, and text fit.
