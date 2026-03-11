import { Page, Locator, expect } from '@playwright/test';   

export class CheckoutStepOnePage { 
    readonly page: Page;
    readonly header: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postCodeInput: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = page.getByText('Checkout: Your Information');
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
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
        await expect(this.header).toBeVisible();
        await expect(this.firstNameInput).toBeVisible();
        await expect(this.lastNameInput).toBeVisible();
        await expect(this.postCodeInput).toBeVisible();
    }

}