import {Locator, Page} from "@playwright/test";
import {BasePage} from "./BasePage";

export class HeaderNavBarPage extends BasePage{
    readonly page: Page;
    readonly loginButton: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        super(page);
        this.loginButton = page.getByRole('link', { name: ' Signup / Login' });
        this.logoutButton = page.getByRole('link', { name: /Logout/i });
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async getLoginButton(): Promise<Locator> {
       return this.loginButton;
    }

}