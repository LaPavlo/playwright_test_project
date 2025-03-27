import { test as base, Page } from "@playwright/test";
import {LogInPage} from "../pages/LogInPage";
import {HeaderNavBarPage} from "../pages/HeaderNavBarPage";
import {BasePage} from "../pages/BasePage";

type Fixtures = {
    loginPage: LogInPage;
    basePage: BasePage;
    header: HeaderNavBarPage;
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
});