import {Locator, Page} from "@playwright/test";
import {BasePage} from "./BasePage";

export class SignupPage extends BasePage{
    readonly nameField: Locator;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly firstNameField: Locator;
    readonly addressField: Locator;
    readonly countrySelect: Locator;
    readonly stateField: Locator;
    readonly cityField: Locator;
    readonly zipCodeField: Locator;
    readonly mobileNumberField: Locator;
    readonly createAccountButton: Locator;

    constructor(page: Page) {
        super(page);
        this.nameField = page.locator('#name');
        this.emailField = page.locator('#email');
        this.passwordField = page.locator('#password');
        this.firstNameField = page.locator('#first_name');
        this.addressField = page.locator('#address1');
        this.countrySelect = page.locator('#country');
        this.stateField = page.locator('#state');
        this.cityField = page.locator('#city');
        this.zipCodeField = page.locator('#zipcode');
        this.mobileNumberField = page.locator('#mobile_number');
        this.createAccountButton = page.locator('[data-qa="create-account"]');
    }
}