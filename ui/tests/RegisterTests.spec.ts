import {test} from "../utils/Fixtures";
import {userToLogin, userToRegister} from "../models/User";
import {expect} from "@playwright/test";

test("1. Register new user", async ({ signUpPage, header }) => {
    await signUpPage.registerNewUser(userToRegister)
    await expect(header.loggedInTitle).toContainText(userToRegister.name);
})

test("1.2 Delete registered user", async ({ page, loginPage, signUpPage }) => {
    await signUpPage.registerNewUser(userToRegister);
    await loginPage.deleteAccount()

    await expect(page).toHaveURL(/delete_account/)
})

test("2. Register user with existed email", async ({ loginPage }) => {
    await loginPage.openSignUpPage(userToLogin)

    await expect(loginPage.existingEmailWarning).toBeVisible()
})
