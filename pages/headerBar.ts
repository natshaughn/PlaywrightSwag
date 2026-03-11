import { Page, Locator, expect } from '@playwright/test';

export class HeaderBar {
  readonly page: Page;
  readonly cartBadge: Locator;
  readonly cartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartButton = page.locator('[data-test="shopping-cart-link"]');
  }

  async clickCart() {
    await this.cartButton.click();
  }

  async assertCartBadgeCount(count: number) {
    await expect(this.cartBadge).toHaveText(count.toString());
  }
}