import { test, expect } from "@playwright/test";

test.describe("Project detail — full content (adventure-works-dbt)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/projects/adventure-works-dbt");
    await page.waitForLoadState("networkidle");
  });

  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
      const h1Count = await page.locator("h1").count();
      const h2Texts = await page.locator("h2").allTextContents();
      const h2Count = await page.locator("h2").count();
      const url = page.url();
      await testInfo.attach("dom-diagnostic", {
        body: JSON.stringify({ url, h1Count, h2Count, h2Texts }, null, 2),
        contentType: "application/json",
      });
    }
  });

  test("h1 is visible", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("Overview section heading is visible", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 2, name: "Overview" })
    ).toBeVisible({ timeout: 10000 });
  });

  test("Key Highlights section heading is visible", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 2, name: "Key Highlights" })
    ).toBeVisible({ timeout: 10000 });
  });

  test("Technical Approach section heading is visible", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 2, name: "Technical Approach" })
    ).toBeVisible({ timeout: 10000 });
  });

  test("tech tags render", async ({ page }) => {
    const tags = page.locator(".tech-tag");
    await expect(tags.first()).toBeVisible();
    expect(await tags.count()).toBeGreaterThanOrEqual(1);
  });

  test("View on GitHub link has github.com href", async ({ page }) => {
    const link = page.getByRole("link", { name: /view on github/i }).first();
    await expect(link).toBeVisible({ timeout: 10000 });
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
    await page.waitForLoadState("networkidle");
  });

  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
      const h1Count = await page.locator("h1").count();
      const h2Texts = await page.locator("h2").allTextContents();
      const bodyText = await page.locator("body").innerText().catch(() => "");
      const url = page.url();
      await testInfo.attach("dom-diagnostic", {
        body: JSON.stringify({ url, h1Count, h2Texts, bodyTextSnippet: bodyText.slice(0, 500) }, null, 2),
        contentType: "application/json",
      });
    }
  });

  test("h1 is visible", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("fallback GitHub notice is visible", async ({ page }) => {
    await expect(
      page.getByText("Detailed information is available on GitHub.")
    ).toBeVisible({ timeout: 10000 });
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
