import {expect, test} from "@playwright/test";
import {LogInPage} from "../pages/LogInPage";
import {HeaderNavBarPage} from "../pages/HeaderNavBarPage";
import {users} from "../utils/config";

test('Login User with correct email and password', async ({ page }) => {
    const  loginPage = new LogInPage(page);
    const navbar = new HeaderNavBarPage(page);

    await loginPage.login(users.admin);
    await expect(navbar.logoutButton).toBeVisible();

})

test('Login User with incorrect password', async ({ page }) => {
    const loginPage = new LogInPage(page);
    await loginPage.login(users.invalidCred);

    await expect(loginPage.incorrectLoginWarning).toBeVisible();
})

test('Log out', async ({ page }) => {
    const loginPage = new LogInPage(page);
    await loginPage.login(users.admin);
    await loginPage.clickLogOutButton();

    await expect(loginPage.loginButton).toBeVisible();
})