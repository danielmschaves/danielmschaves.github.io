import { test, expect } from "@playwright/test";

const routes = [
  { path: "/", label: "home" },
  { path: "/resume", label: "resume" },
  { path: "/contact", label: "contact" },
  { path: "/services", label: "services" },
  { path: "/projects/adventure-works-dbt", label: "project detail" },
];

for (const { path, label } of routes) {
  test(`${label} page loads without errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));

    await page.goto(path);
    await page.waitForLoadState("networkidle");
    await expect(page).not.toHaveTitle(/error/i);
    expect(errors, `JS errors on ${path}`).toHaveLength(0);
  });
}

test("404 page renders for unknown route", async ({ page }) => {
  await page.goto("/this-does-not-exist");
  await expect(page.getByRole("heading", { name: /404/i })).toBeVisible();
});

test("contact form keeps submit disabled until the CAPTCHA passes", async ({ page }) => {
  await page.goto("/contact");
  for (const label of ["NAME", "EMAIL", "SUBJECT", "MESSAGE"]) {
    await expect(page.getByLabel(label)).toBeVisible();
  }
  await expect(page.getByRole("button", { name: /send message/i })).toBeDisabled();
});

test("only /contact carries the form; other footers link to it", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("form.lg-form")).toHaveCount(0);
  await page.locator("footer").getByRole("link", { name: "Send a message" }).click();
  await expect(page).toHaveURL(/\/contact/);
  await expect(page.getByRole("heading", { level: 1, name: "Contact" })).toBeVisible();
  await expect(page.locator("form.lg-form")).toHaveCount(1);
});
