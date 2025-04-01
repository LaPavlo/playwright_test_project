import {BasePage} from "./BasePage";
import {Locator, Page} from "@playwright/test";
import {HeaderNavBarPage} from "./HeaderNavBarPage";

export class AllProductsPage extends BasePage{
    readonly searchProductField: Locator;
    readonly submitSearchButton: Locator;
    readonly productsList: Locator;
    readonly productTitles: Locator;
    readonly viewProductButton: Locator;
    readonly header: HeaderNavBarPage

    constructor(page: Page) {
        super(page);
        this.searchProductField = page.locator('#search_product');
        this.submitSearchButton = page.locator('#submit_search');
        this.productsList = page.locator('.single-products');
        this.productTitles = page.locator('div[class="productinfo text-center"] p');
        this.viewProductButton = page.locator('a[href^="/product_details/"]');
        this.header = new HeaderNavBarPage(page);
    }

    async viewFirstProduct() {
        await this.navigateTo('/');
        await this.header.openAllProductsPage();
        await this.viewProductButton.first().click();
    }

    async searchProducts(name: string) {
        await this.navigateTo('/');
        await this.header.productsButton.click();
        await this.searchProductField.fill(name);
        await this.submitSearchButton.click();
        return await this.productTitles.allTextContents();
    }
}