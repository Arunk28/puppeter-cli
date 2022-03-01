const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(0);
  await page.goto(
    "https://economictimes.indiatimes.com/news/newsblogs/russia-ukraine-war-crisis-news-live-vladimir-putin-volodymyr-zelenskyy-latest-updates-march-1-2022/liveblog/89911246.cms"
  );
  await page.screenshot({ path: "economictimes.png" });
  // Get the "viewport" of the page, as reported by the page.

  const result = await page.evaluate(() => {
    let readAllNodeList = document.querySelectorAll(".updateText h3");
    const copyNodeList = [...readAllNodeList];
    return copyNodeList.map((node) => node.innerText);
  });

  console.log(result);

  await browser.close();
})();
