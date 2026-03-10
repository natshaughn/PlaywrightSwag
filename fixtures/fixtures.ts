import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';

export const test = base.extend<{
  loginPage: LoginPage,
  inventoryPage: InventoryPage
}>({
  loginPage: async ({ page }, use) => {
    const lp = new LoginPage(page);
    await use(lp);
  },
  inventoryPage: async ({ page }, use) => {
    const ip = new InventoryPage(page);
    await use(ip);
  }
});

export { expect };