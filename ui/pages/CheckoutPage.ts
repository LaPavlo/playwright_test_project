import {Locator, Page} from "@playwright/test";
import {BasePage} from "./BasePage";

export class CheckoutPage extends BasePage{
    readonly placeOrderButton: Locator;

    constructor(page: Page) {
        super(page);
        this.placeOrderButton = page.locator('a[href="/payment"]')
    }

    async clickPlaceOrder(){
        await this.placeOrderButton.click();
    }
}