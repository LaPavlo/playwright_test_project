import {expect} from "@playwright/test";
import {test} from "../utils/Fixtures";
import {invalidCredUser, userToLogin} from "../models/User";

test('2. Login User with correct email and password', async ({ loginPage, header }) => {
    await loginPage.login(userToLogin);
    await expect(header.logoutButton).toBeVisible();
})

test('3. Login as User with incorrect password', async ({ loginPage }) => {
    await loginPage.login(invalidCredUser);
    await expect(loginPage.incorrectLoginWarning).toBeVisible();
})

test('4. Log out', async ({ loginPage }) => {
    await loginPage.login(userToLogin);
    await loginPage.clickLogOutButton();

    await expect(loginPage.loginButton).toBeVisible();
})
