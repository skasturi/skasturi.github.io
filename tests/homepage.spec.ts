import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('page loads successfully', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);
  });

  test('page title contains site name', async ({ page }) => {
    await expect(page).toHaveTitle(/Sasidhar Kasturi/);
  });

  test('profile photo is visible and not broken', async ({ page }) => {
    const photo = page.locator('img.profile-photo');
    await expect(photo).toBeVisible();
    const naturalWidth = await photo.evaluate((el: HTMLImageElement) => el.naturalWidth);
    expect(naturalWidth).toBeGreaterThan(0);
  });

  test('Apple-style sidebar is visible on desktop', async ({ page }) => {
    const sidebar = page.locator('.sidebar');
    await expect(sidebar).toBeVisible();

    await expect(sidebar).toHaveCSS('position', 'fixed');
    await expect(sidebar).toHaveCSS('background-color', 'rgb(245, 245, 247)');
    const mainBox = await page.locator('.main').boundingBox();
    const viewport = page.viewportSize();

    expect(mainBox).not.toBeNull();
    expect(viewport).not.toBeNull();
    expect(Math.abs(mainBox!.x + mainBox!.width / 2 - (240 + (viewport!.width - 240) / 2))).toBeLessThan(8);
  });

  test('profile photo floats to the right on desktop', async ({ page }) => {
    const photo = page.locator('img.profile-photo');
    const box = await photo.boundingBox();
    const viewport = page.viewportSize();
    expect(box).not.toBeNull();
    expect(viewport).not.toBeNull();
    expect(box!.x).toBeGreaterThan(viewport!.width / 2);
  });

  test('profile photo is centered above content on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    const photo = page.locator('img.profile-photo');
    const sidebar = page.locator('.sidebar');
    const box = await photo.boundingBox();
    const viewport = page.viewportSize();

    await expect(sidebar).toHaveCSS('position', 'static');
    expect(box).not.toBeNull();
    expect(viewport).not.toBeNull();
    expect(Math.abs(box!.x + box!.width / 2 - viewport!.width / 2)).toBeLessThan(8);
  });

  test('name is present on page', async ({ page }) => {
    await expect(page.getByText('Sasidhar Kasturi').first()).toBeVisible();
  });

  test('career and education summary is visible', async ({ page }) => {
    await expect(page.getByText('Applied AI/ML Director, AI Transformation')).toBeVisible();
    await expect(page.getByText('AWM Global Private Bank')).toBeVisible();
    await expect(page.getByText('AI engineering leader with 15+ years building machine learning systems')).toBeVisible();
    await expect(page.getByText('Microsoft — Azure AI Platform')).toBeVisible();
    await expect(page.getByText('BTech, Computer Science & Engineering')).toBeVisible();
    await expect(page.getByText('JP Morgan Technology Innovation Forum')).toBeVisible();
    await expect(page.getByText('Bengaluru').first()).toBeVisible();
  });

  test('city name is standardized to Bengaluru', async ({ page }) => {
    await expect(page.getByText('Bangalore')).toHaveCount(0);
    await expect(page.getByText('Bengaluru')).not.toHaveCount(0);
  });

  test('old homepage copy is not shown', async ({ page }) => {
    await expect(page.getByText('Senior Engineer in the Microsoft Azure Machine Learning team')).toHaveCount(0);
    await expect(page.getByText('Thank you for visiting my homepage')).toHaveCount(0);
  });

  test('key links have valid href attributes', async ({ page }) => {
    const links: { text: string; hrefFragment: string }[] = [
      { text: 'Prof. Soumen Chakrabarti', hrefFragment: 'soumen' },
      { text: 'Compressed Data Structures for Annotated Web Search', hrefFragment: 'Cads.pdf' },
    ];

    for (const { text, hrefFragment } of links) {
      const link = page.getByRole('link', { name: text });
      await expect(link).toBeVisible();
      const href = await link.getAttribute('href');
      expect(href).toContain(hrefFragment);
    }
  });

  test('contact email is visible', async ({ page }) => {
    await expect(page.getByText('kasturisasidhar@gmail.com')).toBeVisible();
    await expect(page.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/sasidhar');
  });

  test('screenshot for visual reference', async ({ page }) => {
    await page.screenshot({ path: 'test-results/homepage.png', fullPage: true });
  });
});
