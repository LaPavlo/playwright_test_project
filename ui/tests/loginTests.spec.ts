import {test} from "@playwright/test";
import {LogInPage} from "../pages/LogInPage";

test('Login User with correct email and password', async ({ page }) => {
    const  loginPage = new LogInPage(page);

    await loginPage.login('demo@ggmail.com','y@9xbUTy5gCfV')

})