import {BasePage} from "./BasePage";
import {Locator, Page} from "@playwright/test";

export class CartModal extends BasePage{
    readonly modal: Locator;
    readonly continueShoppingButton: Locator;
    readonly viewCartButton: Locator;

    constructor(page: Page) {
        super(page);
        this.modal = page.locator('#cartModal');
        this.continueShoppingButton = this.modal.locator('[data-dismiss="modal"]');
        this.viewCartButton = this.modal.locator('a[href="/view_cart"]');
    }

    async clickContinueShoppingButton() {
        await this.continueShoppingButton.click();
    }

    async clickViewCartButton() {
        await this.viewCartButton.click();
    }
}