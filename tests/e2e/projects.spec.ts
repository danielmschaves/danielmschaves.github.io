import { test, expect } from "@playwright/test";

test.describe("Project detail — adventure-works-dbt", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/projects/adventure-works-dbt");
    await page.waitForLoadState("networkidle");
  });

  test("h1 is visible", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("tech tags render", async ({ page }) => {
    const tags = page.locator(".tech-tag");
    await expect(tags.first()).toBeVisible();
    expect(await tags.count()).toBeGreaterThanOrEqual(1);
  });

  test("a link to github.com is present", async ({ page }) => {
    await expect(page.locator('a[href*="github.com"]').first()).toBeVisible();
  });

  test("Back to Portfolio link navigates to home", async ({ page }) => {
    await page.getByRole("link", { name: /back to portfolio/i }).click();
    await expect(page).toHaveURL(/\/$/);
  });
});

test.describe("Project detail — billion-rows", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/projects/billion-rows");
    await page.waitForLoadState("networkidle");
  });

  test("h1 is visible", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("Overview heading does not exist", async ({ page }) => {
    await expect(
      page.locator("h2").filter({ hasText: "Overview" })
    ).not.toBeAttached();
  });
});

test.describe("Home page project grid", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Featured badge is visible on the featured project card", async ({ page }) => {
    await expect(page.getByText("Featured").first()).toBeVisible({ timeout: 2000 });
  });

  test("clicking a project card navigates to its detail page", async ({ page }) => {
    const card = page.locator("article").first();
    await card.scrollIntoViewIfNeeded();
    const link = card.getByRole("link").first();
    await link.click();
    await expect(page).toHaveURL(/\/projects\//);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
});
