import {test} from "../utils/Fixtures";
import {userToRegister} from "../models/User";
import {expect} from "@playwright/test";
import {card} from "../models/CreditCardBuilder";

test('14. Place Order: Register while Checkout', async ( { page, allProductsPage, viewCartPage, signUpPage, header, checkoutPage, paymentPage }) => {
    await allProductsPage.addFirstProductToCart();
    await allProductsPage.clickViewCartButtonInModal();
    await viewCartPage.clickProceedToCheckout();
    await viewCartPage.clickRegisterOrLoginButtonOnModal()
    await  expect(page).toHaveURL(/login/);

    await signUpPage.registerNewUser(userToRegister);
    await expect(header.loggedInTitle).toContainText(userToRegister.name);

    await header.openCartPage();
    await viewCartPage.clickProceedToCheckout();
    await  expect(page).toHaveURL(/checkout/);

    await checkoutPage.verifyDeliveryAddress(userToRegister);
    //TODO extend address verification, add product verification

    await checkoutPage.fillInCommentFieldAndPlaceOrder();
    await paymentPage.fillInCardFieldsAndConfirm(card, userToRegister);
    await expect(page).toHaveURL(/payment_done/);

    await header.clickDeleteAccountButton();
    await expect(page).toHaveURL(/delete_account/)
})