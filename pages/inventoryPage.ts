import { Page, Locator, expect } from '@playwright/test';   

export class InventoryPage { 
    readonly page: Page;
    readonly header: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = page.getByText('Products');
    }

    async addProductToCart(productName: string) {
    const productSlug = productName.toLowerCase().replace(/\s+/g, '-');
    await this.page.locator(`[data-test="add-to-cart-${productSlug}"]`).isVisible({ timeout: 5000 });
    await this.page.locator(`[data-test="add-to-cart-${productSlug}"]`).click();
    }

    async assertInventoryHeaderText(expectedText: string) {
        await expect(this.header).toHaveText(expectedText);
    }

    async waitForInventoryPage() {
        await expect(this.header).toBeVisible({ timeout: 5000 });
    }
}
