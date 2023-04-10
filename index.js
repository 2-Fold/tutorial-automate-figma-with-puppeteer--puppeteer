import * as dotenv from "dotenv";
import puppeteer from "puppeteer";
import os from "os";
import { puppeteerConfig } from "./constants.js";
import loginAndOpenPlugin from "./flows/loginAndOpenPlugin.js";

dotenv.config();

// const runPluginAction = async (action) => {};

(async () => {
  // users os is used to determine which keyboard shortcut to use.
  const userOs = os.platform();
  const browser = await puppeteer.launch(puppeteerConfig);
  const page = await browser.newPage();
  await page.goto(process.env.FIGMA_SSO_FILE);
  await loginAndOpenPlugin(page, userOs);
})();
