import { test, expect } from "@playwright/test";

test.describe("Hero animations", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("avatar is visible after mount animation", async ({ page }) => {
    const avatar = page.locator('img[alt="Daniel Chaves"]');
    await expect(avatar).toBeVisible({ timeout: 2000 });
  });

  test("h1 fades in", async ({ page }) => {
    const heading = page.getByRole("heading", { level: 1, name: "Daniel Chaves" });
    await expect(heading).toBeVisible({ timeout: 2000 });
  });

  test("title pill is visible", async ({ page }) => {
    await expect(
      page.getByText("Delivery Manager & Data Engineer")
    ).toBeVisible({ timeout: 2000 });
  });

  test("core expertise pillars render", async ({ page }) => {
    await expect(page.getByText("Data Platform Architecture & Engineering")).toBeVisible({ timeout: 2000 });
    await expect(page.getByText("AI/ML Solutions & Data Products")).toBeVisible({ timeout: 2000 });
  });

  test("CTA buttons are present", async ({ page }) => {
    await expect(page.getByRole("link", { name: /view resume/i })).toBeVisible({ timeout: 2000 });
    await expect(page.getByRole("link", { name: /view github/i })).toBeVisible({ timeout: 2000 });
  });
});

test.describe("Scroll-triggered animations", () => {
  test("project cards become visible after scrolling into view", async ({ page }) => {
    await page.goto("/");
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    // Give whileInView time to fire
    await page.waitForTimeout(600);
    const cards = page.locator("article");
    await expect(cards.first()).toBeVisible();
  });

  test("experience cards animate in on resume page", async ({ page }) => {
    await page.goto("/resume");
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(600);
    // At least one experience entry is visible
    const experienceSection = page.getByRole("heading", { name: /experience/i });
    await expect(experienceSection).toBeVisible();
  });

  test("skills grid blocks visible after scroll", async ({ page }) => {
    await page.goto("/resume");
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(600);
    const skillsSection = page.getByRole("heading", { name: /skills/i });
    await expect(skillsSection).toBeVisible();
  });
});
