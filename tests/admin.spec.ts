import { test, expect } from "@playwright/test";

const routes = [
  "/admin",
  "/admin/reports",
  "/admin/reports/DEMO-CC-001",
  "/admin/services",
  "/admin/appointments",
  "/admin/users",
  "/admin/notifications",
  "/admin/settings",
  "/admin/analytics",
  "/admin/emergency-contacts",
];

test("every admin route renders without page errors or viewport overflow", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  for (const route of routes) {
    await page.goto(route);
    await expect(page.locator("h1")).toBeVisible();
    await expect(
      page.getByText("Fictional data · Local preview only."),
    ).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth + 1,
      ),
      route,
    ).toBe(true);
  }
  expect(errors).toEqual([]);
});

test("report filters and empty state reset", async ({ page }) => {
  await page.goto("/admin/reports");
  await page
    .getByRole("combobox", { name: "Status", exact: true })
    .selectOption("resolved");
  await expect(page.locator("tbody tr")).toHaveCount(2);
  await page.getByLabel("Search reports").fill("no such report");
  await expect(
    page.getByRole("heading", { name: "No matching examples" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Clear filters" }).first().click();
  await expect(page.locator("tbody tr")).toHaveCount(6);
  await page
    .getByRole("combobox", { name: "Priority", exact: true })
    .selectOption("urgent");
  await expect(page.locator("tbody tr")).toHaveCount(1);
});

test("report changes and notes stay local and reset on reload", async ({
  page,
}) => {
  const writes: string[] = [];
  page.on("request", (request) => {
    if (request.url().includes("/api/") && request.method() !== "GET")
      writes.push(request.url());
  });
  await page.goto("/admin/reports/DEMO-CC-001");
  await page
    .getByRole("combobox", { name: "Report status", exact: true })
    .selectOption("resolved");
  await page
    .getByLabel("Responsible department")
    .selectOption("IT desk (sample)");
  await page.getByRole("button", { name: "Apply preview changes" }).click();
  await page.getByRole("button", { name: "Confirm preview" }).click();
  await expect(page.getByRole("status")).toContainText(
    "Report preview updated",
  );
  await expect(page.getByText("Preview updated: resolved")).toBeVisible();
  await page
    .getByLabel("Add a sample note")
    .fill("Fictional repair review complete.");
  await page.getByRole("button", { name: "Add note preview" }).click();
  await expect(
    page.getByText("Fictional repair review complete.", { exact: true }),
  ).toBeVisible();
  await page.getByRole("link", { name: "All reports" }).click();
  await expect(
    page.getByRole("row").filter({ hasText: "Broken study hall lighting" }),
  ).toContainText("resolved");
  await page.reload();
  await expect(
    page.getByRole("row").filter({ hasText: "Broken study hall lighting" }),
  ).toContainText("in progress");
  expect(writes).toEqual([]);
});

test("appointment decisions and rescheduling", async ({ page }) => {
  await page.goto("/admin/appointments");
  await page.getByRole("button", { name: "View DEMO-APT-001" }).click();
  await page.getByRole("button", { name: "Approve preview" }).click();
  await page.getByRole("button", { name: "Confirm preview" }).click();
  await expect(
    page.getByRole("row").filter({ hasText: "DEMO-APT-001" }),
  ).toContainText("confirmed");
  await page.getByRole("button", { name: "View DEMO-APT-001" }).click();
  await page.getByLabel("Example date", { exact: true }).fill("2026-11-12");
  await page.getByRole("button", { name: "Save reschedule preview" }).click();
  await expect(
    page.getByRole("row").filter({ hasText: "DEMO-APT-001" }),
  ).toContainText("2026-11-12");
  await page.getByRole("button", { name: "View DEMO-APT-001" }).click();
  await page.getByRole("button", { name: "Reject preview" }).click();
  await page.getByRole("button", { name: "Confirm preview" }).click();
  await expect(
    page.getByRole("row").filter({ hasText: "DEMO-APT-001" }),
  ).toContainText("rejected");
});

test("service validation creation editing and visibility", async ({ page }) => {
  await page.goto("/admin/services");
  await page.getByRole("button", { name: "Add service preview" }).click();
  await page.getByLabel("Service title", { exact: true }).fill("   ");
  await page
    .getByLabel("Example description")
    .fill("Fictional study support service.");
  await page.getByLabel("Example opening hours").fill("Sample weekdays 10–12");
  await page.getByRole("button", { name: "Save service preview" }).click();
  await expect(page.getByRole("dialog").getByRole("alert")).toContainText(
    "Blank spaces alone",
  );
  await page
    .getByLabel("Service title", { exact: true })
    .fill("Example study desk");
  await page.getByRole("button", { name: "Save service preview" }).click();
  const card = page
    .getByRole("article")
    .filter({ hasText: "Example study desk" });
  await expect(card).toContainText("disabled");
  await page.getByRole("button", { name: "Enable Example study desk" }).click();
  await page.getByRole("button", { name: "Confirm preview" }).click();
  await expect(card).toContainText("enabled");
  await page.getByRole("button", { name: "Edit Example study desk" }).click();
  await page
    .getByLabel("Service title", { exact: true })
    .fill("Example revised desk");
  await page.getByRole("button", { name: "Save service preview" }).click();
  await expect(
    page.getByRole("heading", { name: "Example revised desk" }),
  ).toBeVisible();
});

test("privileged account actions remain disabled", async ({ page }) => {
  await page.goto("/admin/users");
  await page
    .getByRole("combobox", { name: "Role", exact: true })
    .selectOption("Staff");
  await expect(page.locator("tbody tr")).toHaveCount(1);
  await page.getByRole("button", { name: "View Example staff B" }).click();
  await expect(page.getByRole("button", { name: "Save role" })).toBeDisabled();
  await expect(
    page.getByRole("button", { name: "Suspend account" }),
  ).toBeDisabled();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(
    page.getByRole("button", { name: "View Example staff B" }),
  ).toBeFocused();
});

test("inbox and accessible display preferences", async ({ page }) => {
  await page.goto("/admin/notifications");
  await page.getByRole("button", { name: "Mark all as read" }).click();
  await expect(
    page.getByRole("link", { name: "Admin notifications, 0 unread examples" }),
  ).toBeVisible();
  await page.getByLabel("Read status").selectOption("unread");
  await expect(
    page.getByRole("heading", { name: "No matching examples" }),
  ).toBeVisible();
  await page.goto("/admin/settings");
  await page.getByRole("button", { name: "Use light theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await expect(
    page.getByRole("button", { name: "Switch to dark mode" }),
  ).toBeVisible();
  await page.getByLabel("Larger interface text").check();
  await page.getByLabel("Reduce motion in the admin workspace").check();
  await expect(page.locator(".admin-portal")).toHaveAttribute(
    "data-large-text",
    "true",
  );
  await expect(page.locator(".admin-portal")).toHaveAttribute(
    "data-reduce-motion",
    "true",
  );
  await page
    .getByRole("button", { name: "Reset admin display preferences" })
    .click();
  await expect(page.getByLabel("Larger interface text")).not.toBeChecked();
});

test("keyboard navigation and mobile drawer", async ({ page, isMobile }) => {
  await page.goto("/admin/reports/DEMO-CC-001");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to admin content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#admin-main")).toBeFocused();
  if (isMobile) {
    const toggle = page.getByRole("button", { name: "Open admin navigation" });
    await toggle.click();
    const drawer = page.getByRole("dialog");
    await expect(drawer).toBeVisible();
    await expect(
      drawer.getByRole("link", { name: "Manage reports" }),
    ).toHaveAttribute("aria-current", "page");
    await page.keyboard.press("Escape");
    await expect(toggle).toBeFocused();
    await toggle.click();
    await drawer.getByRole("link", { name: "Services", exact: true }).click();
    await expect(page).toHaveURL(/\/admin\/services$/);
    await expect(drawer).toHaveCount(0);
  } else {
    await expect(
      page
        .getByRole("navigation", { name: "Admin navigation", exact: true })
        .getByRole("link", { name: "Manage reports" }),
    ).toHaveAttribute("aria-current", "page");
  }
});

test("narrow and tablet layouts respect light theme and reduced motion", async ({
  page,
}) => {
  await page.emulateMedia({ colorScheme: "light", reducedMotion: "reduce" });
  for (const width of [320, 768]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of [
      "/admin",
      "/admin/reports",
      "/admin/services",
      "/admin/settings",
    ]) {
      await page.goto(route);
      await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth + 1,
        ),
        `${route} at ${width}`,
      ).toBe(true);
    }
  }
});
