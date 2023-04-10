import * as dotenv from "dotenv";
dotenv.config();

export const pluginSearchTerm = "Figgy Run";

export const puppeteerConfig = {
  executablePath: process.env.CHROME_PATH,
  headless: process.env.HEADLESS_MODE === "true",
  devtools: process.env.DEVTOOLS === "true",
};

export const credentials = {
  email: process.env.FIGMA_USER_EMAIL,
  password: process.env.FIGMA_USER_PASSWORD,
};

export const operatingSystems = {
  mac: "darwin",
  windows: "win32",
};

export const selectors = {
  loginForm: {
    emailInput: "#email",
    passwordInput: "#current-password",
    loginButton: 'button[type="submit"]',
  },
  notification: {
    dismissButton: 'button[class*="close_button"]',
  },
  navbar: {
    loginButton: '[class*="loginButton"]',
    menuDropdown: 'button[class*="toolbar_styles--enabledButton"]',
  },
  quickActionsInput: 'input[class*="quick_actions--searchInput"]',
};
