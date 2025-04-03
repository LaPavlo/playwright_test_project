import {BasePage} from "./BasePage";
import {expect, Locator, Page} from "@playwright/test";
import {HeaderNavBarPage} from "./HeaderNavBarPage";

export class AllProductsPage extends BasePage{
    readonly searchProductField: Locator;
    readonly submitSearchButton: Locator;
    readonly productsList: Locator;
    readonly productTitles: Locator;
    readonly productPrices: Locator;
    readonly viewProductButton: Locator;
    readonly addToCartButton: Locator;
    readonly cartModal: Locator;
    readonly continueShoppingButton: Locator;
    readonly viewCartButton: Locator;
    readonly header: HeaderNavBarPage

    constructor(page: Page) {
        super(page);
        this.searchProductField = page.locator('#search_product');
        this.submitSearchButton = page.locator('#submit_search');
        this.productsList = page.locator('.single-products');
        this.productPrices = page.locator('div[class="productinfo text-center"] h2');
        this.productTitles = page.locator('div[class="productinfo text-center"] p');
        this.viewProductButton = page.locator('a[href^="/product_details/"]');
        this.addToCartButton = page.locator('[data-product-id]');

        this.cartModal = page.locator('#cartModal');
        this.continueShoppingButton = this.cartModal.locator('[data-dismiss="modal"]');
        this.viewCartButton = this.cartModal.locator('a[href="/view_cart"]');
        this.header = new HeaderNavBarPage(page);
    }

    async viewFirstProduct() {
        await this.header.openAllProductsPage();
        await this.viewProductButton.first().click();
    }

    async addFirstProductToCard() {
        await this.header.openAllProductsPage();
        await this.productsList.first().hover();
        await this.addToCartButton.first().click();

        await expect(this.continueShoppingButton).toBeVisible();
    }

    async addSecondProductToCard() {
        await this.productsList.nth(1).hover({force: true});
        await this.addToCartButton.nth(1).click({force: true});

        await expect(this.continueShoppingButton).toBeVisible();
    }

    async searchProducts(name: string) {
        await this.header.openAllProductsPage();
        await this.searchProductField.fill(name);
        await this.submitSearchButton.click();
        return await this.productTitles.allTextContents();
    }

    async clickContinueShopping() {
        await this.continueShoppingButton.click();
    }

    async clickViewCartButtonInModal() {
        await this.viewCartButton.click();
        await expect(this.page).toHaveURL(/view_cart/);
    }

    async getProductDetailsByIndex(index: number) {
        return {
            price: await this.productPrices.nth(index).textContent(),
            quantity: 1,
            title: await this.productTitles.nth(index).textContent(),
        }
    }
}