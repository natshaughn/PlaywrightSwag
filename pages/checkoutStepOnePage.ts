import { Page, Locator, expect } from '@playwright/test';   

export class CheckoutStepOnePage { 
    readonly page: Page;
    readonly continueButton: Locator;
    readonly firstNameInput: Locator;
    readonly header: Locator;
    readonly lastNameInput: Locator;
    readonly postCodeInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.continueButton = page.locator('[data-test="continue"]');
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.header = page.getByText('Checkout: Your Information');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postCodeInput = page.locator('[data-test="postalCode"]');      
    }

    async clickContinue() {
        await this.continueButton.click();
    }

    async enterCustomerDetails(firstName: string, lastName: string, postcode: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postCodeInput.fill(postcode);
    }

    async waitForCheckoutStepOnePage() {
        await expect(this.header).toBeVisible({ timeout: 5000 });
        await expect(this.firstNameInput).toBeVisible({ timeout: 5000 });
        await expect(this.lastNameInput).toBeVisible({ timeout: 5000 });
        await expect(this.postCodeInput).toBeVisible({ timeout: 5000 });
    }
}
