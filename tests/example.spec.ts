import { test, expect } from '@playwright/test';

test('Navigate to Material Playwrightvn', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Expect a title "to contain" "Tài liệu học automation test".
  await expect(page).toHaveTitle(/Tài liệu học automation test/);
});

test('Click on Register Page on Material Playwrightvn Page', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com//');

  // Click the Register Page.
  await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();

  // Expects page to have a heading with the name of User Registration.
  await expect(page.getByRole('heading', { name: 'User Registration' })).toBeVisible();
});
