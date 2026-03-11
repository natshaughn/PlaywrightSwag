import { Page, Locator, expect } from '@playwright/test';   

export class CartPage { 
    readonly page: Page;
    readonly header: Locator;
    readonly cartItems: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = page.getByText('Your Cart');
        this.cartItems = page.locator('.cart_item');
    }

    async assertNumberOfItemsInCart(expectedCount: number) {
        await expect(this.cartItems).toHaveCount(expectedCount);
    }

    async assertProductVisible(productName: string) {
        await expect(this.page.getByText(productName)).toBeVisible();
    }

    async ClickCheckoutButton() {
        await this.page.locator('[data-test="checkout"]').click();
    }

    async waitForCartPage() {
        await expect(this.header).toBeVisible();
    }


}