import {BasePage} from './BasePage';
import {expect, Locator, Page} from '@playwright/test';
import {CheckoutModal} from './CheckoutModal';

export class ViewCartPage extends BasePage{
    readonly proceedToCheckoutButton: Locator;
    readonly product: Locator;
    readonly title: Locator;
    readonly price: Locator;
    readonly quantity: Locator;
    readonly checkoutModal: CheckoutModal;

    constructor(page: Page) {
        super(page);
        this.proceedToCheckoutButton = page.locator('.check_out');
        this.product = page.locator('#product-1');
        this.title = this.product.locator('a[href^="/product_details/"]');
        this.price = this.product.locator('td.cart_price p');
        this.quantity = this.product.locator('td.cart_quantity button.disabled');
        this.checkoutModal = new CheckoutModal(page);
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
        };
    }

    async clickProceedToCheckout() {
        await this.proceedToCheckoutButton.click();
        // await expect(this.checkoutModal.modal).toBeVisible();
        //
        //
    }

    async clickRegisterOrLoginButtonOnModal() {
        await this.checkoutModal.clickRegisterOrLoginButton();
    }

}