import {test} from "../utils/Fixtures";
import {userToRegister} from "../models/User";
import {expect} from "@playwright/test";

test('14: Place Order: Register while Checkout', async ( { page, allProductsPage, viewCartPage, signUpPage, header }) => {
    await allProductsPage.addFirstProductToCard();
    await allProductsPage.clickViewCartButtonInModal();
    await viewCartPage.clickProceedToCheckout();
    await viewCartPage.clickRegisterOrLoginButtonOnModal()
    await  expect(page).toHaveURL(/login/);

    await signUpPage.registerNewUser(userToRegister);
    await expect(header.loggedInTitle).toContainText(userToRegister.name);

    await header.openCartPage();
    await viewCartPage.clickProceedToCheckout();
    await  expect(page).toHaveURL(/checkout/);

})