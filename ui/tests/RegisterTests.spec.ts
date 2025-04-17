import {test} from '../utils/Fixtures';
import {userToLogin, userToRegister} from '../models/User';
import {expect} from '@playwright/test';
import {contactUsMessage} from '../models/ContuctUsForm';

test('1. Register new user', async ({ signUpPage, header }) => {
    await signUpPage.registerNewUser(userToRegister);
    await expect(header.loggedInTitle).toContainText(userToRegister.name);
});

test('1.2 Delete registered user', async ({ page, loginPage, signUpPage }) => {
    await signUpPage.registerNewUser(userToRegister);
    await loginPage.deleteAccount();

    await expect(page).toHaveURL(/delete_account/);
});

test('2. Register user with existing email', async ({ loginPage }) => {
    await loginPage.openSignUpPage(userToLogin);

    await expect(loginPage.existingEmailWarning).toBeVisible();
});

test('6. Test the Contact Us Form', async ({ contactUsPage }) => {
    await contactUsPage.submitContactUsForm(contactUsMessage);

    await expect(contactUsPage.successfulSubmitMessage)
        .toContainText('Success! Your details have been submitted successfully.');

    await contactUsPage.clickHomeAndVerifyNavigation();
});
