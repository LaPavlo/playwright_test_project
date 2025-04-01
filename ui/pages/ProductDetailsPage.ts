import {expect, Locator, Page} from "@playwright/test";
import {BasePage} from "./BasePage";

export class ProductDetailsPage extends BasePage{
    readonly productName: Locator;
    readonly productCategory: Locator;
    readonly price: Locator;
    readonly availability: Locator;
    readonly condition: Locator;
    readonly brand: Locator;

    constructor(page: Page) {
        super(page);
        this.productName = page.locator('.product-information h2');
        this.productCategory = page.locator('.product-information h2 + p');
        this.price = page.locator('//span/span[contains(text(), "Rs.")]');
        this.availability = page.locator('//p[b[contains(text(), "Availability:")]]/b');
        this.condition = page.locator('//p[b[contains(text(), "Condition:")]]/b');
        this.brand = page.locator('//p[b[contains(text(), "Brand:")]]/b');
    }

    async verifyProductDetails() {
        const elements = [
            this.productName,
            this.productCategory,
            this.price,
            this.availability,
            this.condition,
            this.brand
        ];

        for (const element of elements) {
            await expect.soft(element).toBeVisible();
        }
    }
}