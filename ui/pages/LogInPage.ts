import {expect, Locator, Page} from "@playwright/test";
import {HeaderNavBarPage} from "./HeaderNavBarPage";
import {BasePage} from "./BasePage";

export class LogInPage extends BasePage{
    readonly emailAddressInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly navbar: HeaderNavBarPage;

    constructor(page: Page) {
        super(page);
        this.navbar = new HeaderNavBarPage(page);
        this.emailAddressInput = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async login(email: string, password: string): Promise<void> {
        await this.navigateTo('/');
        await this.navbar.clickLoginButton();
        await expect(this.emailAddressInput).toBeVisible();

        await this.fillInEmailAddressInput(email);
        await this.fillInPasswordInput(password);
        await this.clickLoginButton();
        await expect(this.navbar.logoutButton).toBeVisible();
    }

    async fillInEmailAddressInput(email : string): Promise<void> {
        await this.emailAddressInput.fill(email);
    }

    async fillInPasswordInput(password : string): Promise<void> {
        await this.passwordInput.fill(password);
    }

    async clickLoginButton(): Promise<void> {
        await this.loginButton.click();
    }

}