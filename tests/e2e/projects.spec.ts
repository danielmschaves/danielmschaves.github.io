import { test, expect } from "@playwright/test";

test.describe("Project detail — full content (adventure-works-dbt)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/projects/adventure-works-dbt");
  });

  test("h1 is visible", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("Overview section heading is visible", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /overview/i })).toBeVisible();
  });

  test("Key Highlights section heading is visible", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /key highlights/i })).toBeVisible();
  });

  test("Technical Approach section heading is visible", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /technical approach/i })).toBeVisible();
  });

  test("tech tags render", async ({ page }) => {
    const tags = page.locator(".tech-tag");
    await expect(tags.first()).toBeVisible();
    expect(await tags.count()).toBeGreaterThanOrEqual(1);
  });

  test("View on GitHub link has github.com href", async ({ page }) => {
    const link = page.getByRole("link", { name: /view on github/i }).first();
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute("href", /github\.com/);
  });

  test("Back to Portfolio link navigates to home", async ({ page }) => {
    await page.getByRole("link", { name: /back to portfolio/i }).click();
    await expect(page).toHaveURL(/\/$/);
  });
});

test.describe("Project detail — minimal content (billion-rows)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/projects/billion-rows");
  });

  test("h1 is visible", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("fallback GitHub notice is visible", async ({ page }) => {
    await expect(
      page.getByText("Detailed information is available on GitHub.")
    ).toBeVisible();
  });

  test("Overview heading does not exist", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: /^overview$/i })
    ).not.toBeVisible();
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
