import { test, expect } from "@playwright/test";

test.describe("Desktop navigation", () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("nav links are visible", async ({ page }) => {
    const nav = page.getByRole("navigation", { name: "Primary" });
    for (const name of ["Work", "Resume", "Services", "Contact"]) {
      await expect(nav.getByRole("link", { name })).toBeVisible();
    }
  });

  test("clicking Resume navigates to /resume and marks it current", async ({ page }) => {
    const nav = page.getByRole("navigation", { name: "Primary" });
    await nav.getByRole("link", { name: "Resume" }).click();
    await expect(page).toHaveURL(/\/resume/);
    await expect(nav.getByRole("link", { name: "Resume" })).toHaveAttribute("aria-current", "page");
  });

  test("clicking Contact navigates to /contact", async ({ page }) => {
    await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "Contact" }).click();
    await expect(page).toHaveURL(/\/contact/);
  });

  test("site brand link returns to home", async ({ page }) => {
    await page.goto("/resume");
    await page.getByRole("link", { name: /daniel chaves/i }).first().click();
    await expect(page).toHaveURL(/\/$/);
  });
});

test.describe("Mobile navigation", () => {
  test.use({ viewport: { width: 360, height: 800 } });

  test("nav links show without a menu button and nothing scrolls sideways", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "Resume" })).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(0);
  });
});

test.describe("Theme", () => {
  test("first visit paints dark", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  });

  test("toggle switches to light and persists across reloads", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Switch to light mode" }).click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
    await expect(page.getByRole("button", { name: "Switch to dark mode" })).toBeVisible();
  });
});

test.describe("Project links", () => {
  test("featured case links to its detail page", async ({ page }) => {
    await page.goto("/");
    await page.locator("a.lg-feature").click();
    await expect(page).toHaveURL(/\/projects\/cloud-migration-enterprise/);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("an opened row links to its case study", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: /Adventure Works/ }).click();
    await page.getByRole("link", { name: /read case study/i }).click();
    await expect(page).toHaveURL(/\/projects\/adventure-works-dbt/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Adventure Works");
  });
});

/* Ledger step 14: the header's theme toggle is icon-only at every width; the word stays for screen readers. */
for (const width of [1440, 390]) {
  test.describe(`Theme toggle at ${width}px`, () => {
    test.use({ viewport: { width, height: 900 } });

    for (const [path, label] of [["/", "Switch to light mode"], ["/pt/", "Mudar para o modo claro"]] as const) {
      test(`is icon-only with label, state and tooltip (${path})`, async ({ page }) => {
        await page.goto(path);
        const toggle = page.getByRole("button", { name: label });
        await expect(toggle).toHaveAttribute("aria-pressed", "true");
        await expect(toggle).toHaveAttribute("title", label);
        const box = await toggle.boundingBox();
        expect(box!.width).toBeLessThanOrEqual(46);
        const text = await toggle.locator(".lg-toggle__text").boundingBox();
        expect(text!.width).toBeLessThanOrEqual(1);
      });
    }
  });
}
