import {expect, Locator, Page} from "@playwright/test";
import {BasePage} from "./BasePage";

export class HeaderNavBarPage extends BasePage{
    readonly page: Page;
    readonly productsButton: Locator;
    readonly loginButton: Locator;
    readonly logoutButton: Locator;
    readonly deleteAccountButton: Locator;
    readonly contactUsButton: Locator;
    readonly loggedInTitle: Locator;

    constructor(page: Page) {
        super(page);
        this.productsButton = page.locator('a[href="/products"]')
        this.loginButton = page.getByRole('link', { name: ' Signup / Login' });
        this.logoutButton = page.getByRole('link', { name: /Logout/i });
        this.deleteAccountButton = page.locator('a[href="/delete_account"]');
        this.contactUsButton = page.locator('a[href="/contact_us"]');
        this.loggedInTitle = page.locator('a').filter({ hasText: 'Logged in as' });
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async clickDeleteAccountButton() {
        await this.deleteAccountButton.click();
    }

    async clickContactUsButton() {
        await this.contactUsButton.click();
    }

    async openAllProductsPage() {
       // await this.navigateTo('/');
        await this.productsButton.click();
      //  await expect(this.page).toHaveURL(/products/);
    }
}