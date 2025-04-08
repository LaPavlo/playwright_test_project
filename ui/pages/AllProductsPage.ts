import {BasePage} from "./BasePage";
import {expect, Locator, Page} from "@playwright/test";
import {HeaderNavBarPage} from "./HeaderNavBarPage";
import {CartModal} from "./CartModal";

export class AllProductsPage extends BasePage{
    readonly searchProductField: Locator;
    readonly submitSearchButton: Locator;
    readonly productsList: Locator;
    readonly productTitles: Locator;
    readonly productPrices: Locator;
    readonly viewProductButton: Locator;
    readonly addToCartButton: Locator;
    readonly header: HeaderNavBarPage
    readonly cartModal: CartModal;

    constructor(page: Page) {
        super(page);
        this.searchProductField = page.locator('#search_product');
        this.submitSearchButton = page.locator('#submit_search');
        this.productsList = page.locator('.single-products');
        this.productPrices = page.locator('div[class="productinfo text-center"] h2');
        this.productTitles = page.locator('div[class="productinfo text-center"] p');
        this.viewProductButton = page.locator('a[href^="/product_details/"]');
        this.addToCartButton = page.locator('[data-product-id]');
        this.header = new HeaderNavBarPage(page);
        this.cartModal = new CartModal(page);
    }

    async viewFirstProduct() {
        await this.header.openAllProductsPage();
        await this.viewProductButton.first().click();

        await expect(this.page).toHaveURL(/product_details/);
    }

    async addFirstProductToCard() {
        await this.header.openAllProductsPage();
        await this.productsList.first().hover();
        await this.addToCartButton.first().click();

        await expect(this.cartModal.modal).toBeVisible();
    }

    async addSecondProductToCard() {
        await this.productsList.nth(1).hover({force: true});
        await this.addToCartButton.nth(1).click({force: true});

        await expect(this.cartModal.modal).toBeVisible();
    }

    async searchProducts(name: string) {
        await this.header.openAllProductsPage();
        await this.searchProductField.fill(name);
        await this.submitSearchButton.click();
        return await this.productTitles.allTextContents();
    }

    async clickViewCartButtonInModal() {
        await this.cartModal.clickViewCartButton();
        await expect(this.page).toHaveURL(/view_cart/);
    }

    async clickContinueShoppingButton() {
        await this.cartModal.clickContinueShoppingButton();
    }

    async getProductDetailsByIndex(index: number) {
        return {
            price: await this.productPrices.nth(index).textContent(),
            quantity: 1,
            title: await this.productTitles.nth(index).textContent(),
        }
    }
}