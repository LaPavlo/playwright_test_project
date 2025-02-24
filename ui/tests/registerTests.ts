import {test} from "@playwright/test";
import {LogInPage} from "../pages/LogInPage";
import {HeaderNavBarPage} from "../pages/HeaderNavBarPage";
import {userToRegister} from "../utils/config";

test("Register new user", async ({page}) => {
    const  loginPage = new LogInPage(page);
    const navbar = new HeaderNavBarPage(page);

    await loginPage.register(userToRegister.newUser)
})