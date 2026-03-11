import { Page, Locator, expect } from '@playwright/test';   

export class CheckoutStepTwoPage { 
    readonly page: Page;
    readonly header: Locator;
    readonly cartItems: Locator;
    readonly paymentInfo: Locator;
    readonly shippingInfo: Locator;
    readonly itemTotal: Locator;
    readonly tax: Locator;
    readonly total: Locator;
    readonly finishButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = page.getByText('Checkout: Overview');
        this.cartItems = page.locator('[data-test="inventory-item"]');
        this.paymentInfo = page.locator('[data-test="payment-info-value"]');
        this.shippingInfo = page.locator('[data-test="shipping-info-value"]');
        this.itemTotal = page.locator('[data-test="subtotal-label"]');
        this.tax = page.locator('[data-test="tax-label"]');
        this.total = page.locator('[data-test="total-label"]');
        this.finishButton = page.locator('[data-test="finish"]');
    }

    async assertNumberOfItems(expectedCount: number) {
        await expect(this.cartItems).toHaveCount(expectedCount);
    }

    async assertPaymentInformation() {
        await expect(this.paymentInfo).toBeVisible();
    }

    async assertProductVisible(productName: string) {
        await expect(this.page.getByText(productName)).toBeVisible();
    }

    async assertShippingInformation() {
        await expect(this.shippingInfo).toBeVisible();
    }

    async assertTotalPrice(expectedTotal: string) {
        await expect(this.total).toContainText(expectedTotal);
    }

    async clickFinishButton() {
        await this.finishButton.click();
    }

    async waitForCheckoutStepTwoPage() {
        await expect(this.header).toBeVisible();
    }

}
