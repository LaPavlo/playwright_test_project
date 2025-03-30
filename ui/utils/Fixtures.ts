import { test as base } from "@playwright/test";
import {LogInPage} from "../pages/LogInPage";
import {HeaderNavBarPage} from "../pages/HeaderNavBarPage";
import {BasePage} from "../pages/BasePage";
import {SignupPage} from "../pages/SignupPage";

type Fixtures = {
    loginPage: LogInPage;
    basePage: BasePage;
    header: HeaderNavBarPage;
    signUpPage: SignupPage;
}

export const test = base.extend<Fixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LogInPage(page));
    },
    basePage: async ({ page }, use) => {
        await use(new BasePage(page));
    },
    header: async ({ page }, use) => {
        await use(new HeaderNavBarPage(page));
    },
    signUpPage: async ({ page }, use) => {
        await use(new SignupPage(page));
    }
});