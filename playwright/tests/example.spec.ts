import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://dev-randriantsoa-nathan.iut.arcanit.io/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Front-end IUT/);
});



test('check data Front', async ({ page }) => {
  await page.goto('https://dev-randriantsoa-nathan.iut.arcanit.io/');

  // Expect.
  await expect(page.locator('#first-name-frontend')).toContainText('Nathan');
  await expect(page.locator('#last-name-frontend')).toContainText('Randriantsoa');
});

test('Check data Back ', async ({ page }) => {
  await page.goto('https://dev-randriantsoa-nathan.iut.arcanit.io/');

  // Expects page to have a heading with the name of Installation.
  await expect(page.locator('#env-backend')).toContainText('Dev');
  await expect(page.locator('#first-name-backend')).toContainText('nathan');
  await expect(page.locator('#last-name-backend')).toContainText('randriantsoa');
});
