import {expect, Locator, Page} from "@playwright/test";
import {HeaderNavBarPage} from "./HeaderNavBarPage";
import {BasePage} from "./BasePage";
import {User} from "../models/User";
import {UserBuilder} from "../models/UserBuilder";

export class LogInPage extends BasePage{
    readonly emailAddressInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly navbar: HeaderNavBarPage;
    readonly logOutButton: Locator;
    readonly incorrectLoginWarning: Locator;
    readonly signUpNameField: Locator;
    readonly signUpEmailField: Locator;
    readonly signUpButton: Locator;

    constructor(page: Page) {
        super(page);
        this.navbar = new HeaderNavBarPage(page);
        this.emailAddressInput = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.logOutButton = page.getByRole('link', { name: ' Logout' })
        this.incorrectLoginWarning = page.getByText('Your email or password is');
        this.signUpNameField = page.locator('[data-qa="signup-name"]');
        this.signUpEmailField = page.locator('[data-qa="signup-email"]');
        this.signUpButton = page.locator('[data-qa="signup-button"]');
    }

    async login(user: User): Promise<void> {
        await this.navigateTo('/');
        await this.navbar.clickLoginButton();
        await expect(this.emailAddressInput).toBeVisible();

        await this.fillInEmailAddressInput(user.email);
        await this.fillInPasswordInput(user.password);
        await this.clickLoginButton();
    }

    async openSignUpPage(user: User): Promise<void> {
        await this.navigateTo('/');
        await this.navbar.clickLoginButton();
        await expect(this.signUpEmailField).toBeVisible();

        await this.signUpNameField.fill(user.name);
        await this.signUpEmailField.fill(user.email);
        await this.signUpButton.click();
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

    async clickLogOutButton(): Promise<void> {
        await this.logOutButton.click();
    }

}