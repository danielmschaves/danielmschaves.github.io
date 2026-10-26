import { test, expect } from "@playwright/test";

const cases = [
  "cloud-migration-enterprise",
  "data-warehouse-modernization",
  "data-intelligence-platform",
  "spotify-etl-aws",
  "adventure-works-dbt",
  "ecommerce-dbt",
];

/* Ledger chart rules: squares only, text at 12px or more as rendered, charts scroll inside their frame. */
for (const slug of cases.flatMap((c) => [c, `pt:${c}`])) {
  test(`${slug} charts follow the Ledger chart rules`, async ({ page }) => {
    await page.goto(slug.startsWith("pt:") ? `/pt/projects/${slug.slice(3)}/` : `/projects/${slug}/`);
    const charts = page.locator(".lg-chart");
    expect(await charts.count()).toBeGreaterThan(0);
    await expect(page.locator(".lg-chart .lg-chart__scroll[role='region']")).toHaveCount(await charts.count());
    await expect(page.locator(".lg-chart circle, .lg-chart ellipse, .lg-chart polygon")).toHaveCount(0);

    const smallest = await page.evaluate(() => {
      const sizes = [...document.querySelectorAll<SVGTextElement>(".lg-chart svg text")].map((t) => {
        const svg = t.ownerSVGElement!;
        const scale = svg.getBoundingClientRect().width / svg.viewBox.baseVal.width;
        return parseFloat(getComputedStyle(t).fontSize) * scale;
      });
      return Math.min(...sizes);
    });
    expect(smallest).toBeGreaterThanOrEqual(11.95);

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(0);
  });
}

test.describe("At phone width", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("the featured figure shows its bare variant", async ({ page }) => {
    await page.goto("/");
    const set = page.locator(".lg-feature .lg-figure-set");
    await expect(set.locator(".lg-figure--compact")).toBeVisible();
    await expect(set.locator(".lg-figure--full")).toBeHidden();
  });
});

test.describe("Header at 360px", () => {
  test.use({ viewport: { width: 360, height: 800 } });

  for (const path of ["/", "/pt/"]) {
  test(`brand, nav and toggles fit on two rows (${path})`, async ({ page }) => {
    await page.goto(path);
    /* Elements on one row share a vertical centre (to within a few px). */
    const rows = await page.evaluate(() =>
      [".lg-header__brand", ".lg-nav", ".lg-header__toggles"].map((s) => {
        const r = document.querySelector(s)!.getBoundingClientRect();
        return Math.round((r.top + r.bottom) / 2 / 8);
      }),
    );
    expect(new Set(rows).size).toBeLessThanOrEqual(2);
    const right = await page.evaluate(() =>
      Math.max(...[...document.querySelectorAll(".lg-header a, .lg-header button")].map((e) => e.getBoundingClientRect().right)),
    );
    expect(right).toBeLessThanOrEqual(360);
  });
  }
});
