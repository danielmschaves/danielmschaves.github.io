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

test.describe("Mount animations", () => {
  test("project cards are visible on home page", async ({ page }) => {
    await page.goto("/");
    // Animations use animate (not whileInView) — content must be present after mount
    const cards = page.locator("article");
    await expect(cards.first()).toBeVisible({ timeout: 2000 });
  });

  test("experience cards are visible on resume page", async ({ page }) => {
    await page.goto("/resume");
    const experienceSection = page.getByRole("heading", { name: /experience/i });
    await expect(experienceSection).toBeVisible({ timeout: 2000 });
  });

  test("skills section is visible on resume page", async ({ page }) => {
    await page.goto("/resume");
    const skillsSection = page.getByRole("heading", { name: /skills/i });
    await expect(skillsSection).toBeVisible({ timeout: 2000 });
  });
});
