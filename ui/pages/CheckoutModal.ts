import {Locator, Page} from "@playwright/test";
import {BasePage} from "./BasePage";

export class CheckoutModal extends BasePage{
    readonly modal: Locator;
    readonly registerOrLoginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.modal = page.locator('.modal-content');
        this.registerOrLoginButton = this.modal.locator('a[href="/login"]');
    }

    async clickRegisterOrLoginButton() {
        await this.registerOrLoginButton.click();
    }

}