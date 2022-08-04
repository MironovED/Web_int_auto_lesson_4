let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page first tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForNavigation();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual("GitHub: Where the world builds software · GitHub");
  }, 60000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  }, 60000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Sign up for free");
  }, 60000);
});

describe("Github page second tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/");
  });

  test("The title team content", async () => {
    const firstLink = await page.$("nav > ul > li:nth-child(2) > a");
    await firstLink.click("");
    await page.waitForNavigation();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub"
    );
  }, 60000);

  test("The title Enterprise content", async () => {
    const firstLink = await page.$("nav > ul > li:nth-child(3) > a");
    await firstLink.click();
    await page.waitForNavigation();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "Enterprise · A smarter way to work together · GitHub"
    );
  }, 60000);

  test("The title Marketplace content", async () => {
    const firstLink = await page.$("nav > ul > li:nth-child(5) > a");
    await firstLink.click();
    await page.waitForNavigation();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub Marketplace · to improve your workflow · GitHub"
    );
  }, 60000);
});
