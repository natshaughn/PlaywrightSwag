import { Page, Locator, expect } from '@playwright/test';   

export class InventoryPage { 
    readonly page: Page;
    readonly header: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = page.getByText('Products');
    }

    async waitForPage() {
        await expect(this.header).toBeVisible();
    }

    async assertHeaderText(expectedText: string) {
        await expect(this.header).toHaveText(expectedText);
    }
}