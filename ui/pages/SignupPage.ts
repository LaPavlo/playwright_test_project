import {expect, Locator, Page} from "@playwright/test";
import {BasePage} from "./BasePage";
import {LogInPage} from "./LogInPage";
import {User, userToRegister} from "../models/User";
import {th} from "@faker-js/faker";

export class SignupPage extends BasePage{
    readonly nameField: Locator;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly addressField: Locator;
    readonly countrySelect: Locator;
    readonly stateField: Locator;
    readonly cityField: Locator;
    readonly zipCodeField: Locator;
    readonly mobileNumberField: Locator;
    readonly createAccountButton: Locator;
    readonly loginPage: LogInPage;

    constructor(page: Page) {
        super(page);
        this.nameField = page.locator('#name');
        this.emailField = page.locator('#email');
        this.passwordField = page.locator('#password');
        this.firstNameField = page.locator('#first_name');
        this.lastNameField = page.locator('#last_name');
        this.addressField = page.locator('#address1');
        this.countrySelect = page.locator('#country');
        this.stateField = page.locator('#state');
        this.cityField = page.locator('#city');
        this.zipCodeField = page.locator('#zipcode');
        this.mobileNumberField = page.locator('#mobile_number');
        this.createAccountButton = page.locator('[data-qa="create-account"]');
        this.loginPage = new LogInPage(page);
    }

    async registerNewUser(user: User): Promise<void> {
        await this.loginPage.openSignUpPage(user);

        await expect(this.nameField).toHaveValue(user.name);
        await expect(this.emailField).toHaveValue(user.email);

        await this.fillInMandatoryUserRegistrationFields(user);
        await this.createAccountButton.click();
    }

    async fillInMandatoryUserRegistrationFields(user: User): Promise<void> {
        await this.passwordField.fill(user.password);
        await this.firstNameField.fill(user.firstName);
        await this.lastNameField.fill(user.lastName);
        await this.addressField.fill(user.address);
        await this.stateField.fill(user.state);
        await this.cityField.fill(user.city);
        await this.zipCodeField.fill(user.zipcode);
        await this.mobileNumberField.fill(user.mobilePhone);
    }
}