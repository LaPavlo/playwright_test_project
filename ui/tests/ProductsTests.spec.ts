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

test('12: Add Products in Cart',
    async ({ page, viewCartPage, header, allProductsPage }) => {
        await header.openAllProductsPage();
        const firstProduct = await allProductsPage.getProductDetailsByIndex(0);
      //  const secondProduct = await allProductsPage.getProductDetailsByIndex(1);

     //   console.log(secondProduct);
        await allProductsPage.addFirstProductToCard();
       await allProductsPage.continueShoppingButton.waitFor({ state: 'visible' });
      // await allProductsPage.continueShoppingButton.click();

        // await allProductsPage.addSecondProductToCard()
        //
         await allProductsPage.clickViewCartButtonInModal();
        const firstProductInCart = await viewCartPage.getFirstProductDetailsFromCart();
        // await page.waitForTimeout(3000);
       // console.log(firstProductInCart);

        expect(firstProduct).toEqual(firstProductInCart);

        //TODO add second product to the cart

    })