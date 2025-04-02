import {BasePage} from "./BasePage";
import {expect, Locator, Page} from "@playwright/test";
import {HeaderNavBarPage} from "./HeaderNavBarPage";

export class AllProductsPage extends BasePage{
    readonly searchProductField: Locator;
    readonly submitSearchButton: Locator;
    readonly productsList: Locator;
    readonly productTitles: Locator;
    readonly viewProductButton: Locator;
    readonly addToCartButton: Locator;
    readonly continueShoppingButton: Locator;
    readonly header: HeaderNavBarPage

    constructor(page: Page) {
        super(page);
        this.searchProductField = page.locator('#search_product');
        this.submitSearchButton = page.locator('#submit_search');
        this.productsList = page.locator('.single-products');
        this.productTitles = page.locator('div[class="productinfo text-center"] p');
        this.viewProductButton = page.locator('a[href^="/product_details/"]');
        this.addToCartButton = page.locator('.fa-shopping-cart');
        this.continueShoppingButton = page.locator('//button[normalize-space()="Continue Shopping"]');
        this.header = new HeaderNavBarPage(page);
    }

    async viewFirstProduct() {
        await this.header.openAllProductsPage();
        await this.viewProductButton.first().click();
    }

    async addProductToCard() {
        await this.header.openAllProductsPage();
        await this.viewProductButton.first().hover();
        await this.page.waitForTimeout(3000);
        await this.addToCartButton.first().click();

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
}