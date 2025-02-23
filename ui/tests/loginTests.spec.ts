import {expect, test} from "@playwright/test";
import {LogInPage} from "../pages/LogInPage";
import {HeaderNavBarPage} from "../pages/HeaderNavBarPage";

test('Login User with correct email and password', async ({ page }) => {
    const  loginPage = new LogInPage(page);
    const navbar = new HeaderNavBarPage(page);

    await loginPage.login('demo@ggmail.com','y@9xbUTy5gCfV');
    await expect(navbar.logoutButton).toBeVisible();

})

test('Login User with incorrect password', async ({ page }) => {
    const loginPage = new LogInPage(page);
    await loginPage.login('demo@ggmail.com1','y@9xbUTy5gCfV')

    await expect(loginPage.incorrectLoginWarning).toBeVisible();
})