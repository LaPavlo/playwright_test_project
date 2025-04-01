import {test} from "../utils/Fixtures";
import {expect} from "@playwright/test";

test('8.Verify All Products and product detail page', async ({ allProductsPage, productDetailsPage }) => {
    await allProductsPage.viewFirstProduct();
    await productDetailsPage.verifyProductDetails()
})

test('9. Search Product', async ({ allProductsPage }) => {
    const searchString: string = "Pink";
    const listOfProductsTitles = await allProductsPage.searchProducts(searchString);

    listOfProductsTitles.forEach((productName) => {
        expect(productName).toContain(searchString);
    })
})