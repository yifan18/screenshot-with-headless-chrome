const puppeteer = require("puppeteer");

const cookies = [
  {
    name: "name",
    value: "111",
    domain: "localhost",
    path: "/",
    expires: new Date().getTime() + 1000 * 60 * 60,
    size: 71
  }
];
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setCookie(...cookies);
  await page.goto("http://localhost:8080/example.html");
  await new Promise(resolve => setTimeout(resolve, 2e3));
  await page.screenshot({ path: "example.png" });

  await browser.close();
  console.log("capture end");
})();
