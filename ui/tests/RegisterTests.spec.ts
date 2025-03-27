import {test} from "../utils/fixtures";
import {userToRegister} from "../models/User";
//import {userToRegister} from "../utils/config";

test("Register new user", async ({ page, loginPage }) => {
    await loginPage.openSignUpPage(userToRegister)
    await page.waitForTimeout(3000);
})
