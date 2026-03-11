import { Page, Locator, expect } from '@playwright/test';   

export class CheckoutStepTwoPage { 
    readonly page: Page;
    readonly cartItems: Locator;
    readonly finishButton: Locator;
    readonly header: Locator;
    readonly itemTotal: Locator;
    readonly paymentInfo: Locator;
    readonly shippingInfo: Locator;
    readonly tax: Locator;
    readonly total: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartItems = page.locator('[data-test="inventory-item"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.header = page.getByText('Checkout: Overview');
        this.itemTotal = page.locator('[data-test="subtotal-label"]');
        this.paymentInfo = page.locator('[data-test="payment-info-value"]');
        this.shippingInfo = page.locator('[data-test="shipping-info-value"]');
        this.tax = page.locator('[data-test="tax-label"]');
        this.total = page.locator('[data-test="total-label"]');   
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

    async assertTotalPrice(expectedTotal: number) {
        const totalText = await this.total.textContent();
        const totalValue = parseFloat(totalText!.replace(/[^0-9.]/g, ''));
        expect(totalValue).toBeCloseTo(expectedTotal, 2);
    }

    async clickFinishButton() {
        await this.finishButton.click();
    }

    async waitForCheckoutStepTwoPage() {
        await expect(this.header).toBeVisible({ timeout: 5000 });
    }
}
