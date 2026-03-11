import { Page, Locator, expect } from '@playwright/test';   
import { assert } from 'node:console';

export class CheckoutCompletePage { 
    readonly page: Page;
    readonly completeHeader: Locator;
    readonly header: Locator;
    readonly orderConfirmation: Locator;

    constructor(page: Page) {
        this.page = page;
        this.completeHeader = page.locator('[data-test="complete-header"]');
        this.header = page.getByText('Checkout: Complete!');
        this.orderConfirmation = page.getByText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    }

    async assertCompleteHeader(expectedText: string) {
        await expect(this.completeHeader).toBeVisible();
        await expect(this.completeHeader).toHaveText(expectedText);
    }

    async assertOrderConfirmationText(expectedText: string) {
        await expect(this.orderConfirmation).toBeVisible();
        await expect(this.orderConfirmation).toHaveText(expectedText);
    }

    async clickBackHomeButton() {
        await this.page.locator('[data-test="back-to-products"]').click();
    }

    async waitForCheckoutCompletePage() {
        await expect(this.header).toBeVisible({ timeout: 5000 });
    }
}
