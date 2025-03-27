import {test} from "../utils/fixtures";
import {userToRegister} from "../models/User";

test("1. Register new user", async ({ page, signUpPage }) => {
    await signUpPage.registerNewUser(userToRegister)
    await page.waitForTimeout(3000);
})
