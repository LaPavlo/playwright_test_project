import {BasePage} from "./BasePage";
import {Locator, Page} from "@playwright/test";

export class ViewCartPage extends BasePage{
    readonly product: Locator;
    readonly title: Locator;
    readonly price: Locator;
    readonly quantity: Locator;

    constructor(page: Page) {
        super(page);
        this.product = page.locator('#product-1');
        this.title = this.product.locator('a[href^="/product_details/"]');
        this.price = this.product.locator('td.cart_price p');
        this.quantity = this.product.locator('td.cart_quantity button.disabled');
    }

    async getQuantity() {
        const quantity =  await this.quantity.nth(0).textContent();
        return Number(quantity);
    }

    async getFirstProductDetailsFromCart() {
        return {
            title: await this.title.nth(0).textContent(),
            price: await this.price.nth(0).textContent(),
            quantity: 1
        }
    }
}