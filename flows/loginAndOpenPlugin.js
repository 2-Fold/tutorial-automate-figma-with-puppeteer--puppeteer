import {
  operatingSystems,
  selectors,
  credentials,
  pluginSearchTerm,
} from "../constants.js";

// User lands of File page and clicks on the login button.
// in the navbar.
const loginFromFile = async (page) => {
  await page.waitForSelector(selectors.navbar.loginButton, { timeout: 1000 });
  await page.click(selectors.navbar.loginButton);
  await page.waitForSelector(selectors.loginForm.emailInput);
  await page.type(selectors.loginForm.emailInput, credentials.email);
  await page.type(selectors.loginForm.passwordInput, credentials.password);
  await page.click(selectors.loginForm.loginButton);
  console.log("Submitted login form");
};

// User is redirected to an email only page.
// After email is entered they are then redirected to a password page.
const multiPageLogin = async (page) => {
  await page.waitForSelector(selectors.loginForm.emailInput);
  await page.type(selectors.loginForm.emailInput, credentials.email);
  await page.click(selectors.loginForm.loginButton);
  await page.waitForSelector(selectors.loginForm.passwordInput);
  await page.type(selectors.loginForm.passwordInput, credentials.password);
  await page.click(selectors.loginForm.loginButton);
  console.log("Submitted login form");
};

const initiateLogin = async (page) => {
  try {
    await loginFromFile(page);
  } catch (error) {
    await multiPageLogin(page);
  }
};

// Dismisses the notification about opening the desktop app.
const dismissNotification = async (page) => {
  await page.waitForNavigation();
  await page.waitForSelector(selectors.notification.dismissButton);
  await page.click(selectors.notification.dismissButton);
  console.log("Dismissed notification");
};

// Opens the plugin using keyboard shortcut (cmd+/) or (ctrl+/).
const openPlugin = async (page, userOs) => {
  await page.bringToFront();
  const rootKey = userOs === operatingSystems.mac ? "Meta" : "Control";
  await page.keyboard.down(rootKey);
  await page.keyboard.press("/");
  await page.keyboard.up(rootKey);
  await page.waitForSelector(selectors.quickActionsInput);
  await page.type(selectors.quickActionsInput, pluginSearchTerm);
  await page.keyboard.press("Enter");
  console.log("Plugin opened");
};

// **
// ** Flow
// ** Run actions in sequence
const loginAndOpenPlugin = async (page, userOs) => {
  await initiateLogin(page);
  await dismissNotification(page);
  await openPlugin(page, userOs);
};

export default loginAndOpenPlugin;
