import {test} from "../utils/Fixtures";

test('8.Verify All Products and product detail page', async ({ allProductsPage, productDetailsPage }) => {
    await  allProductsPage.viewFirstProduct();
    await productDetailsPage.verifyProductDetails()
})