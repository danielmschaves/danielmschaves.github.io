import { test, expect } from "@playwright/test";

test.describe("Desktop navigation", () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("nav links are visible", async ({ page }) => {
    await expect(page.getByRole("link", { name: /portfolio/i }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /resume/i }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /contact/i }).first()).toBeVisible();
  });

  test("clicking Resume navigates to /resume", async ({ page }) => {
    await page.getByRole("link", { name: /^resume$/i }).first().click();
    await expect(page).toHaveURL(/\/resume/);
  });

  test("clicking Contact navigates to /contact", async ({ page }) => {
    await page.getByRole("link", { name: /^contact$/i }).first().click();
    await expect(page).toHaveURL(/\/contact/);
  });

  test("site brand link returns to home", async ({ page }) => {
    await page.goto("/resume");
    await page.getByRole("link", { name: /daniel.*chaves/i }).first().click();
    await expect(page).toHaveURL(/\/$/);
  });
});

test.describe("Mobile navigation", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("mobile menu opens and shows links", async ({ page }) => {
    await page.goto("/");
    // Open hamburger
    const menuButton = page.getByRole("button", { name: /menu|open/i });
    await expect(menuButton).toBeVisible();
    await menuButton.click();
    await expect(page.getByRole("link", { name: /resume/i }).first()).toBeVisible({ timeout: 1000 });
  });
});

test.describe("Project cards link to detail pages", () => {
  test("clicking a featured project card navigates to detail", async ({ page }) => {
    await page.goto("/");
    // The featured project heading links to the detail page
    const projectLink = page.getByRole("link", { name: /adventure works/i }).first();
    await projectLink.scrollIntoViewIfNeeded();
    await projectLink.click();
    await expect(page).toHaveURL(/\/projects\//);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
});
