import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';
import { CartPage } from '../pages/cartPage';
import { CheckoutStepOnePage } from '../pages/checkoutStepOnePage';
import { CheckoutStepTwoPage } from '../pages/checkoutStepTwoPage';
import { CheckoutCompletePage } from '../pages/checkoutCompletePage';
import { HeaderBar } from '../pages/headerBar';

export const test = base.extend<{
  loginPage: LoginPage,
  inventoryPage: InventoryPage
  cartPage: CartPage
  checkoutStepOnePage: CheckoutStepOnePage
  checkoutStepTwoPage: CheckoutStepTwoPage
  checkoutCompletePage: CheckoutCompletePage
  headerBar: HeaderBar
}>({
  loginPage: async ({ page }, use) => {
    const lp = new LoginPage(page);
    await use(lp);
  },

  inventoryPage: async ({ page }, use) => {
    const ip = new InventoryPage(page);
    await use(ip);
  },

  cartPage: async ({ page }, use) => {
    const cp = new CartPage(page);
    await use(cp);
  },

  checkoutStepOnePage: async ({ page }, use) => {
    const csop = new CheckoutStepOnePage(page);
    await use(csop);
  },

  checkoutStepTwoPage: async ({ page }, use) => {
    const cstp = new CheckoutStepTwoPage(page);
    await use(cstp);
  },

  checkoutCompletePage: async ({ page }, use) => {
    const ccp = new CheckoutCompletePage(page);
    await use(ccp);
  },

  headerBar: async ({ page }, use) => {
    const hb = new HeaderBar(page);
    await use(hb);
  },
});

export { expect };