import { test, expect } from "@playwright/test";

const pages = ["/", "/resume/", "/services/", "/contact/", "/projects/spotify-etl-aws/"];

test.describe("English and Portuguese", () => {
  for (const path of pages) {
    test(`${path} exists in both languages with the right <html lang> and hreflang`, async ({ page }) => {
      await page.goto(path);
      await expect(page.locator("html")).toHaveAttribute("lang", "en");
      await expect(page.locator('link[rel="alternate"][hreflang="pt-BR"]')).toHaveAttribute("href", new RegExp(`/pt${path}$`));

      await page.goto(`/pt${path}`);
      await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
      await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute("href", new RegExp(`${path}$`));
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", new RegExp(`/pt${path}$`));
    });
  }

  test("the toggle lands on the same page in the other language", async ({ page }) => {
    await page.goto("/resume/");
    await page.getByRole("navigation", { name: "Language" }).getByRole("link", { name: "Português" }).click();
    await expect(page).toHaveURL(/\/pt\/resume\/$/);
    await expect(page.getByRole("navigation", { name: "Principal" }).getByRole("link", { name: "Currículo" })).toHaveAttribute("aria-current", "page");
    await page.getByRole("navigation", { name: "Idioma" }).getByRole("link", { name: "English" }).click();
    await expect(page).toHaveURL(/\/resume\/$/);
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
  });

  test("the toggle keeps the #hash", async ({ page }) => {
    await page.goto("/#work");
    await page.getByRole("navigation", { name: "Language" }).getByRole("link", { name: "Português" }).click();
    await expect(page).toHaveURL(/\/pt\/#work$/);
    await expect(page.getByRole("heading", { name: "Trabalhos selecionados" })).toBeVisible();
  });

  test("/en/ paths redirect to the unprefixed English URL", async ({ page }) => {
    await page.goto("/en/services/");
    await expect(page).toHaveURL(/\/services\/$/);
  });

  test("Portuguese pages link within Portuguese", async ({ page }) => {
    await page.goto("/pt/");
    const internal = await page.$$eval("a[href^='/']:not([hreflang])", (as) => as.map((a) => a.getAttribute("href") ?? ""));
    const leaks = internal.filter((h) => !h.startsWith("/pt") && !/\.(pdf|png|svg)$/.test(h));
    expect(leaks).toEqual([]);
  });

  test("the résumé PDF falls back to English, labelled as such", async ({ page }) => {
    await page.goto("/pt/resume/");
    await expect(page.getByRole("link", { name: "Baixar PDF (inglês)" })).toBeVisible();
  });

  test("an unknown /pt/ path shows the Portuguese 404", async ({ page }) => {
    const res = await page.goto("/pt/nao-existe/");
    expect(res?.status()).toBe(404);
    await expect(page.getByText("Esta página não existe ou mudou de endereço.")).toBeVisible();
  });

  test("the contact form answers in Portuguese on /pt/contact/", async ({ page }) => {
    await page.goto("/pt/contact/");
    for (const label of ["NOME", "E-MAIL", "ASSUNTO", "MENSAGEM"]) {
      await expect(page.getByLabel(label)).toBeVisible();
    }
    /* Submit the empty form without the CAPTCHA: field validation runs first and answers in the form's language. */
    await page.locator("form.lg-form").evaluate((f: HTMLFormElement) => f.requestSubmit());
    await expect(page.getByText("O nome precisa ter pelo menos 2 caracteres.")).toBeVisible();
    await expect(page.getByText("Informe um e-mail válido.")).toBeVisible();
  });
});
