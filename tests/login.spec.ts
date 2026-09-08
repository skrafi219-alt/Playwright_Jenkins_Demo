import { test, expect } from '@playwright/test';

test('verify Playwright Get Started page', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await page.getByRole('link', { name: 'Get started' }).click();

  await expect(page).toHaveURL(/.*intro/);
});

// Jenkins webhook test
// Jenkins webhook test2
// Jenkins webhook test3