import {BasePage} from "./BasePage";
import {Locator, Page} from "@playwright/test";

export class ViewCartPage extends BasePage{
    readonly product: Locator;
    readonly title: Locator;
    readonly price: Locator;

    constructor(page: Page) {
        super(page);
        this.product = page.locator('#product-1');
        this.title = this.product.locator('a[href^="/product_details/"]');
        this.price = this.product.locator('td.cart_price p');
    }

    async getFirstProductDetailsFromCart() {
        return {
            title: await this.title.nth(0).textContent(),
            price: await this.price.nth(0).textContent(),
            quantity: 1
            //totalPrice: await this.price.nth(0).textContent(),
        }
    }
}