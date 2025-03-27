import {expect} from "@playwright/test";
import {test} from "../utils/fixtures";
import {users} from "../utils/config";

test('2. Login User with correct email and password', async ({ loginPage, header }) => {
    await loginPage.login(users.admin);
    await expect(header.logoutButton).toBeVisible();

})

test('3. Login User with incorrect password', async ({ loginPage }) => {
    await loginPage.login(users.invalidCred);
    await expect(loginPage.incorrectLoginWarning).toBeVisible();
})

test('4. Log out', async ({ loginPage }) => {
    await loginPage.login(users.admin);
    await loginPage.clickLogOutButton();

    await expect(loginPage.loginButton).toBeVisible();
})