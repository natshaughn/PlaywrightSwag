import { Page, Locator, expect } from '@playwright/test';   

export class LoginPage { 
    readonly page: Page;
    readonly errorMessage: Locator;
    readonly loginButton: Locator;
    readonly passwordInput: Locator;
    readonly usernameInput: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.errorMessage = page.locator('[data-test="error"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.usernameInput = page.locator('[data-test="username"]');
    }

    async assertLoginErrorText(expectedText: string) {
        await expect(this.errorMessage).toHaveText(expectedText);
    }

    async goto() {
        await this.page.goto('/'); 
        await this.waitForLoginPage();
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async waitForLoginPage() {
        await expect(this.page.getByText('Swag Labs')).toBeVisible({ timeout: 5000 });
        await expect(this.usernameInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.loginButton).toBeVisible();
    }  
}
