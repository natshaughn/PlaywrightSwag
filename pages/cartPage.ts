import { Page, Locator, expect } from '@playwright/test';   

export class CartPage { 
    readonly page: Page;
    readonly cartItems: Locator;
    readonly header: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.cartItems = page.locator('.cart_item');
        this.header = page.getByText('Your Cart');  
    }

    async assertNumberOfItemsInCart(expectedCount: number) {
        await expect(this.cartItems).toHaveCount(expectedCount);
    }

    async assertProductVisible(productName: string) {
        await expect(this.page.getByText(productName)).toBeVisible();
    }

    async clickCheckoutButton() {
        await this.page.locator('[data-test="checkout"]').click();
    }

    async waitForCartPage() {
        await expect(this.header).toBeVisible();
    }
}
