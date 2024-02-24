const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  test("draw displays card choices", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 2000);
    await driver.findElement(By.id("draw")).click();
    const cards = await driver.findElement(By.id("choices"));
    await driver.wait(until.elementIsVisible(cards), 2000)
  });
  test("add to duo button displays the selected cards in player duo", async () =>{
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
    await driver.findElement(By.id("draw")).click();
    const cards = await driver.findElement(By.id("choices"));
    await driver.wait(until.elementIsVisible(cards), 2000);
    await driver.findElement(By.className("bot-btn")).click();
    const playerDuo = await driver.findElement(By.id("player-duo"));
    await driver.wait(until.elementIsVisible(playerDuo), 2000);

  });
});