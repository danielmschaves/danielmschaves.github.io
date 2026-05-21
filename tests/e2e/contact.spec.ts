import { test, expect } from "@playwright/test";

test.describe("Contact page — form structure", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("page heading Let's Work Together is visible", async ({ page }) => {
    await expect(page.getByText(/let.*s work together/i)).toBeVisible();
  });

  test("form card heading Get in Touch is visible", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /get in touch/i })).toBeVisible();
  });

  test("Name label and input are present", async ({ page }) => {
    await expect(page.getByLabel("Name")).toBeVisible();
  });

  test("Email label and input are present", async ({ page }) => {
    await expect(page.getByLabel("Email")).toBeVisible();
  });

  test("Subject label and input are present", async ({ page }) => {
    await expect(page.getByLabel("Subject")).toBeVisible();
  });

  test("Message label and textarea are present", async ({ page }) => {
    await expect(page.getByLabel("Message")).toBeVisible();
  });

  test("submit button is disabled without CAPTCHA token", async ({ page }) => {
    const button = page.getByRole("button", { name: /send message/i });
    await expect(button).toBeDisabled();
  });

  test("CAPTCHA-not-configured notice is visible when env key is unset", async ({ page }) => {
    // Turnstile only renders when NEXT_PUBLIC_TURNSTILE_SITE_KEY is set.
    // In CI (and most local envs without the key) this fallback text appears.
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    if (!siteKey) {
      await expect(
        page.getByText(/CAPTCHA not configured/i)
      ).toBeVisible();
    }
  });

  test("email contact link renders in the info panel", async ({ page }) => {
    await expect(
      page.getByRole("link", { name: /danielmschaves@gmail/i }).first()
    ).toBeVisible();
  });
});

test.describe("Contact page — field interaction", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("user can type into all form fields", async ({ page }) => {
    await page.getByLabel("Name").fill("Jane Doe");
    await page.getByLabel("Email").fill("jane@example.com");
    await page.getByLabel("Subject").fill("Hello there");
    await page.getByLabel("Message").fill("This is a test message.");

    await expect(page.getByLabel("Name")).toHaveValue("Jane Doe");
    await expect(page.getByLabel("Email")).toHaveValue("jane@example.com");
    await expect(page.getByLabel("Subject")).toHaveValue("Hello there");
    await expect(page.getByLabel("Message")).toHaveValue("This is a test message.");
  });
});
