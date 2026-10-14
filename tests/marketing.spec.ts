import { test, expect } from "@playwright/test";

const publicRoutes = ["/", "/features", "/about", "/contact"];
const operational =
  /^\/(admin|dashboard|report-issue|my-reports|services|appointments|emergency|notifications|profile|settings)(\/|$)/;

test("public pages have meaningful metadata and no operational links", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  for (const route of publicRoutes) {
    await page.goto(route);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("h1")).toBeVisible();
    await expect(page).toHaveTitle(/CampusCare/);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      /CampusCare/,
    );
    await expect(
      page.getByRole("banner").getByRole("link", { name: "CampusCare home" }),
    ).toBeVisible();
    expect(
      await page
        .locator('a[href^="/"]')
        .evaluateAll((links) => links.map((link) => link.getAttribute("href"))),
    ).not.toEqual([]);
    const hrefs = await page
      .locator('a[href^="/"]')
      .evaluateAll((links) => links.map((link) => link.getAttribute("href")!));
    expect(
      hrefs.filter((href) => operational.test(href)),
      route,
    ).toEqual([]);
    await expect(page.getByRole("banner").getByRole("searchbox")).toHaveCount(
      0,
    );
    await expect(
      page.getByRole("banner").getByRole("button", { name: /Switch to/ }),
    ).toHaveCount(0);
  }
  expect(errors).toEqual([]);
});

test("landing page includes every requested story section", async ({
  page,
}) => {
  await page.goto("/");
  for (const id of [
    "the-problem",
    "our-solution",
    "features",
    "how-it-works",
    "for-students",
    "for-teams",
    "product-tour",
    "our-vision",
    "trust",
    "faq",
    "get-started",
  ]) {
    await expect(page.locator(`#${id}`)).toHaveCount(1);
    await expect(page.locator(`#${id} h2`).first()).toBeVisible();
  }
  await expect(page.locator("#how-it-works ol > li")).toHaveCount(5);
  await expect(page.locator("#features article")).toHaveCount(8);
  await expect(page.getByRole("contentinfo")).toContainText(
    "not affiliated with or endorsed",
  );
});

test("FAQ supports keyboard disclosure with honest answers", async ({
  page,
}) => {
  await page.goto("/#faq");
  const questions = page.locator("#faq details");
  await expect(questions).toHaveCount(8);
  const first = questions.first();
  await first.locator("summary").focus();
  await page.keyboard.press("Enter");
  await expect(first).toHaveAttribute("open", "");
  await expect(first.locator("p")).toBeVisible();
  await page.keyboard.press("Space");
  await expect(first).not.toHaveAttribute("open", "");
  await page.getByText("Is CampusCare free?", { exact: true }).click();
  await expect(
    questions.filter({ hasText: "Is CampusCare free?" }).locator("p"),
  ).toContainText("No pricing or access model has been finalized");
  await page
    .getByText("When will the full platform be available?", { exact: true })
    .click();
  await expect(questions.last().locator("p")).toContainText(
    "no confirmed launch date",
  );
});

test("walkthrough tabs switch panels and support arrow keys", async ({
  page,
}) => {
  const apiCalls: string[] = [];
  page.on("request", (request) => {
    if (request.url().includes("/api/")) apiCalls.push(request.url());
  });
  await page.goto("/#product-tour");
  const tabs = page.getByRole("tab");
  await expect(tabs).toHaveCount(5);
  for (const name of [
    "Report tracking",
    "Appointments",
    "Notifications",
    "Team overview",
    "Student workspace",
  ]) {
    const tab = page.getByRole("tab", { name: new RegExp(name) });
    await tab.click();
    await expect(tab).toHaveAttribute("aria-selected", "true");
    await expect(page.getByRole("tabpanel")).toHaveCount(1);
    await expect(page.getByRole("tabpanel")).toContainText("fictional data");
  }
  await tabs.first().focus();
  await page.keyboard.press("ArrowRight");
  await expect(tabs.nth(1)).toBeFocused();
  await expect(tabs.nth(1)).toHaveAttribute("aria-selected", "true");
  await page.keyboard.press("End");
  await expect(tabs.last()).toBeFocused();
  expect(apiCalls).toEqual([]);
});

test("public navigation and account CTAs reach the correct destinations", async ({
  page,
  isMobile,
}) => {
  await page.goto("/about");
  if (isMobile)
    await page.getByRole("button", { name: "Open navigation" }).click();
  const nav = page.getByRole("navigation", {
    name: isMobile ? "Mobile main navigation" : "Main navigation",
    exact: true,
  });
  await expect(
    nav.getByRole("link", { name: "About", exact: true }),
  ).toHaveAttribute("aria-current", "page");
  await nav.getByRole("link", { name: "How It Works" }).click();
  await expect(page).toHaveURL(/\/#how-it-works$/);
  await expect(page.locator("#how-it-works")).toBeInViewport();
  await page.goto("/");
  await page
    .locator(".cc-hero")
    .getByRole("link", { name: "Get started" })
    .click();
  await expect(page).toHaveURL(/\/auth\/signup$/);
  await expect(
    page.getByText("Frontend preview only.", { exact: false }).first(),
  ).toBeVisible();
});

test("mobile drawer contains focus, closes with Escape and restores focus", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Open navigation" });
  await trigger.click();
  const drawer = page.getByRole("dialog", { name: "Mobile navigation" });
  await expect(drawer).toBeVisible();
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  await drawer.getByRole("button", { name: "Close navigation" }).focus();
  await page.keyboard.press("Shift+Tab");
  expect(
    await page.evaluate(() => !!document.activeElement?.closest("dialog")),
  ).toBe(true);
  await page.keyboard.press("Escape");
  await expect(drawer).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await trigger.click();
  await drawer.getByRole("link", { name: "Contact", exact: true }).click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(drawer).not.toBeVisible();
});

test("public layouts fit narrow, tablet and desktop screens in both themes", async ({
  page,
}) => {
  test.setTimeout(90000);
  for (const theme of ["light", "dark"]) {
    await page.emulateMedia({
      colorScheme: theme as "light" | "dark",
      reducedMotion: "reduce",
    });
    for (const width of [320, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      for (const route of publicRoutes) {
        await page.goto(route);
        await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth + 1,
          ),
          `${route}, ${width}, ${theme}`,
        ).toBe(true);
      }
    }
  }
});

test("marketing content and FAQ remain available without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3195/");
  await expect(page.locator("h1")).toBeVisible();
  await page.locator("#faq summary").first().click();
  await expect(page.locator("#faq details").first().locator("p")).toBeVisible();
  await context.close();
});

test("skip link, reduced motion and footer theme controls work", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator("h1")).toBeVisible();
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to main content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();
  expect(
    await page
      .locator(".cc-hero-copy")
      .evaluate((element) => getComputedStyle(element).animationName),
  ).toBe("none");
  const before = await page.locator("html").getAttribute("data-theme");
  await page
    .getByRole("contentinfo")
    .getByRole("button", { name: /Switch to/ })
    .click();
  await expect(page.locator("html")).toHaveAttribute(
    "data-theme",
    before === "light" ? "dark" : "light",
  );
});
