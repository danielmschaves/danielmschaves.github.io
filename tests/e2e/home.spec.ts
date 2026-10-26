import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("hero heading carries the accent phrase", async ({ page }) => {
    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toContainText("from pilot to production");
    await expect(heading.locator(".lg-accent")).toHaveText(/business outcomes\./);
  });

  test("hero eyebrow is visible", async ({ page }) => {
    await expect(page.getByText("PROGRAM MANAGER · DATA & AI · FLORIANÓPOLIS, BR · REMOTE")).toBeVisible();
  });

  test("CTA buttons are present", async ({ page }) => {
    await expect(page.getByRole("link", { name: "See selected work" })).toBeVisible();
    await expect(page.getByRole("link", { name: /download résumé/i })).toBeVisible();
  });

  test("stat strip shows four stats", async ({ page }) => {
    await expect(page.locator(".lg-stat")).toHaveCount(4);
  });

  test("featured case renders its figure", async ({ page }) => {
    const figure = page.locator(".lg-feature svg[role='img']");
    await expect(figure).toHaveAttribute("aria-label", /six legacy data centers/);
  });

  test("project rows open in place, one at a time", async ({ page }) => {
    const rows = page.locator(".lg-row__head");
    await rows.nth(0).click();
    await expect(rows.nth(0)).toHaveAttribute("aria-expanded", "true");
    await rows.nth(1).click();
    await expect(rows.nth(1)).toHaveAttribute("aria-expanded", "true");
    await expect(rows.nth(0)).toHaveAttribute("aria-expanded", "false");
  });

  test("filter pills narrow the rows", async ({ page }) => {
    const pill = page.getByRole("group", { name: "Filter projects" }).getByRole("button", { name: /^Data Engineering/ });
    await pill.click();
    await expect(pill).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator("#work .lg-ledger .lg-row")).toHaveCount(3);
  });
});

test.describe("Resume page", () => {
  test("experience rows are open, newest first", async ({ page }) => {
    await page.goto("/resume");
    await expect(page.getByRole("heading", { name: "Experience" })).toBeVisible();
    const first = page.locator(".lg-role__head").first();
    await expect(first).toContainText("Program Manager — phData");
    await expect(first).toHaveAttribute("aria-expanded", "true");
  });

  test("skills section is visible", async ({ page }) => {
    await page.goto("/resume");
    await expect(page.getByRole("heading", { name: "Skills" })).toBeVisible();
  });
});
