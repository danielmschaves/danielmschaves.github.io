import { test, expect } from "@playwright/test";

test.describe("Resume page — section headings", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/resume");
  });

  test("Experience heading is visible", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /experience/i })).toBeVisible({ timeout: 2000 });
  });

  test("Education heading is visible", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /education/i })).toBeVisible({ timeout: 2000 });
  });

  test("Certifications heading is visible", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /certifications/i })).toBeVisible({ timeout: 2000 });
  });

  test("Skills heading is visible", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /skills/i })).toBeVisible({ timeout: 2000 });
  });
});

test.describe("Resume page — content from data", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/resume");
  });

  test("first experience company Indicium is visible", async ({ page }) => {
    await expect(page.getByText("Indicium").first()).toBeVisible({ timeout: 2000 });
  });

  test("first experience role Delivery Manager is visible", async ({ page }) => {
    await expect(page.getByText("Delivery Manager").first()).toBeVisible({ timeout: 2000 });
  });

  test("education institution Federal University of Santa Maria is visible", async ({ page }) => {
    await expect(page.getByText("Federal University of Santa Maria")).toBeVisible({ timeout: 2000 });
  });

  test("IBM Data Engineering Professional Certificate is visible", async ({ page }) => {
    await expect(
      page.getByText("IBM Data Engineering Professional Certificate")
    ).toBeVisible({ timeout: 2000 });
  });

  test("Python skill chip is visible", async ({ page }) => {
    await expect(page.getByText("Python").first()).toBeVisible({ timeout: 2000 });
  });
});

test.describe("Resume page — PDF download link", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/resume");
  });

  test("Download PDF Resume link is visible", async ({ page }) => {
    await expect(
      page.getByRole("link", { name: /download pdf resume/i })
    ).toBeVisible();
  });

  test("PDF link has download attribute", async ({ page }) => {
    const link = page.getByRole("link", { name: /download pdf resume/i });
    await expect(link).toHaveAttribute("download");
  });

  test("PDF link href points to a PDF file", async ({ page }) => {
    const link = page.getByRole("link", { name: /download pdf resume/i });
    await expect(link).toHaveAttribute("href", /\.pdf/);
  });
});
