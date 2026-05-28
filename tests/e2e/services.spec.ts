import { test, expect } from "@playwright/test";

test.describe("Services page — structure", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/services");
  });

  test("page h1 is visible", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1, name: /professional services/i })
    ).toBeVisible();
  });

  test("all 6 service card titles are visible", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Project Management and Strategy" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Resumes and Interviews" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "AI and Data Consultancy" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Data Platform Architecture" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "AI/ML Solutions Development" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Data Product Development" })).toBeVisible();
  });

  test("CTA Contact Me link points to /contact", async ({ page }) => {
    const link = page.getByRole("link", { name: /contact me/i });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute("href", /contact/);
  });

  test("CTA View Resume link is visible", async ({ page }) => {
    await expect(page.getByRole("link", { name: /view resume/i })).toBeVisible();
  });
});
