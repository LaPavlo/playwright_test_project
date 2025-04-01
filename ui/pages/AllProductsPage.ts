import {BasePage} from "./BasePage";
import {Locator, Page} from "@playwright/test";
import {HeaderNavBarPage} from "./HeaderNavBarPage";

export class AllProductsPage extends BasePage{
    readonly productsList: Locator;
    readonly viewProductButton: Locator;
    readonly header: HeaderNavBarPage

    constructor(page: Page) {
        super(page);
        this.productsList = page.locator('.single-products');
        this.viewProductButton = page.locator('a[href^="/product_details/"]');
        this.header = new HeaderNavBarPage(page);
    }

    async viewFirstProduct() {
        await this.navigateTo('/');
        await this.header.clickProductsButton();
        await this.viewProductButton.first().click();
    }
}