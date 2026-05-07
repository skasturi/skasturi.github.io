# Experience-First AI Profile Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the experience-first homepage redesign around "Hands-on AI engineering leader" and AI transformation.

**Architecture:** This remains a static Jekyll homepage. `index.md` owns semantic content and section structure; `assets/css/style.scss` owns responsive layout and visual hierarchy; `tests/homepage.spec.ts` owns content, layout, and mobile regression coverage.

**Tech Stack:** Jekyll 3.9, SCSS, Playwright, GitHub Pages.

---

## File Structure

- Modify `index.md`: Replace the current sidebar/main content with a compact identity area, transformation-led hero, proof chips, and expanded experience entries.
- Modify `assets/css/style.scss`: Reduce desktop sidebar/main gap, add compact hero/proof chip/experience styling, and improve mobile rendering with a top profile block and stacked experience.
- Modify `tests/homepage.spec.ts`: Update assertions for the new headline, GitHub link, AI transformation content, desktop gap target, and mobile stacked layout.

## Task 1: Add Failing Homepage Behavior Tests

**Files:**
- Modify: `tests/homepage.spec.ts`

- [ ] **Step 1: Replace outdated visual/content assertions with redesign requirements**

Add tests that expect:

```ts
await expect(page.getByText('Hands-on AI engineering leader')).toBeVisible();
await expect(page.getByText('Driving AI transformation through model platforms, agentic systems, and applied AI capabilities')).toBeVisible();
await expect(page.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/skasturi');
await expect(page.getByText('250+ engineers')).toBeVisible();
await expect(page.getByText('0 to 37 team build')).toBeVisible();
await expect(page.getByText('AI transformation')).toBeVisible();
await expect(page.getByText('model customization, fine-tuning, distillation')).toBeVisible();
```

- [ ] **Step 2: Add layout regression tests**

Add tests that compute:

```ts
const sidebarBox = await page.locator('.sidebar').boundingBox();
const mainBox = await page.locator('.main').boundingBox();
expect(mainBox!.x - (sidebarBox!.x + sidebarBox!.width)).toBeGreaterThanOrEqual(72);
expect(mainBox!.x - (sidebarBox!.x + sidebarBox!.width)).toBeLessThanOrEqual(112);
```

For mobile, set viewport to `390x844` and assert:

```ts
await expect(page.locator('.sidebar')).toHaveCSS('position', 'static');
await expect(page.locator('.sidebar')).toHaveCSS('display', 'grid');
const timelineColumns = await page.locator('.timeline').first().evaluate((el) => getComputedStyle(el).gridTemplateColumns);
expect(timelineColumns.split(' ').length).toBe(1);
```

- [ ] **Step 3: Run tests and verify failure**

Run: `npm test`

Expected: FAIL because the production page does not yet include the new headline, GitHub link, new proof chips, adjusted desktop spacing, or mobile stacked timeline.

## Task 2: Implement Content Structure

**Files:**
- Modify: `index.md`

- [ ] **Step 1: Update sidebar content**

Add GitHub to links, change sidebar role line to "Hands-on AI engineering leader", and keep focus areas compact:

```html
<div class="sidebar-title">
  Hands-on AI engineering leader<br>
  AI Transformation<br>
  J.P. Morgan · Microsoft<br>
  Bengaluru
</div>
```

- [ ] **Step 2: Replace hero copy with compact transformation-led positioning**

Use:

```html
<h1 class="hero-title">Hands-on AI engineering leader</h1>
<p class="hero-subtitle">
  Driving AI transformation through model platforms, agentic systems, and applied AI capabilities across Microsoft Azure AI and J.P. Morgan.
</p>
```

- [ ] **Step 3: Add proof chips**

Use:

```html
<div class="proof-chips" aria-label="Career highlights">
  <span>250+ engineers</span>
  <span>0 to 37 team build</span>
  <span>LLM customization</span>
  <span>AI transformation</span>
</div>
```

- [ ] **Step 4: Expand experience entries**

Keep the timeline but add concise role, scope, and impact text for J.P. Morgan, Azure AI Platform, AzureML India, AutoML, Cortana, Bing, and APEX.

## Task 3: Implement Responsive Styling

**Files:**
- Modify: `assets/css/style.scss`

- [ ] **Step 1: Reduce desktop main gap**

Set `.main` to:

```scss
.main {
  flex: 1;
  max-width: 780px;
  margin-left: calc(var(--sidebar-w) + 88px);
  padding: 52px 0 80px;
  width: min(780px, calc(100vw - var(--sidebar-w) - 128px));
}
```

- [ ] **Step 2: Add hero and proof chip styles**

Add `.hero`, `.hero-title`, `.hero-subtitle`, and `.proof-chips` styles with restrained sizing, stronger contrast, and no large prose block.

- [ ] **Step 3: Improve experience readability**

Make `.t-body` entries slightly more structured, add `.t-role` and `.t-impact`, and keep text compact but usable.

- [ ] **Step 4: Improve mobile layout**

At `max-width: 720px`, make `.sidebar` a compact grid profile header, hide nonessential focus detail if needed, set `.main` padding to `28px 24px 56px`, make `.timeline` one column, and stack dates above content.

## Task 4: Verify, Commit, And Push

**Files:**
- Modify: `index.md`
- Modify: `assets/css/style.scss`
- Modify: `tests/homepage.spec.ts`
- Create/modify: `docs/superpowers/plans/2026-05-07-experience-first-ai-profile-redesign.md`

- [ ] **Step 1: Run full verification**

Run:

```bash
npm test
bundle exec jekyll build
```

Expected: both commands exit 0.

- [ ] **Step 2: Inspect desktop and mobile screenshots**

Use the Playwright screenshot test output or an equivalent browser screenshot to verify:

- desktop gap is visibly reduced
- header is short and professional
- Experience starts early
- mobile profile block is compact
- mobile experience entries are stacked and readable

- [ ] **Step 3: Commit**

Run:

```bash
git add -f docs/superpowers/plans/2026-05-07-experience-first-ai-profile-redesign.md
git add index.md assets/css/style.scss tests/homepage.spec.ts
git commit -m "Redesign homepage around AI transformation experience"
```

- [ ] **Step 4: Push**

Run:

```bash
git push origin master
```
