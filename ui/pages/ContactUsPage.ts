import {BasePage} from "./BasePage";
import {expect, Locator, Page} from "@playwright/test";
import {ContactUsForm} from "../models/ContuctUsForm";
import {HeaderNavBarPage} from "./HeaderNavBarPage";
import {th} from "@faker-js/faker";
import {t} from "@faker-js/faker/dist/airline-CBNP41sR";

export class ContactUsPage extends BasePage{
    readonly pageTitle: Locator;
    readonly nameField: Locator;
    readonly emailField: Locator;
    readonly subjectField: Locator;
    readonly messageField: Locator;
    readonly uploadFileButton: Locator;
    readonly submitButton: Locator;
    readonly successfulSubmitMessage: Locator;
    readonly navbar: HeaderNavBarPage;

    constructor(page: Page) {
        super(page);
        this.navbar = new HeaderNavBarPage(page);
        this.pageTitle = page.locator('//h2[normalize-space()="Get In Touch"]');
        this.nameField = page.locator('[data-qa="name"]');
        this.emailField = page.locator('[data-qa="email"]');
        this.subjectField = page.locator('[data-qa="subject"]');
        this.messageField = page.locator('[data-qa="message"]');
        this.uploadFileButton = page.locator('input[name="upload_file"]');
        this.submitButton = page.locator('[data-qa="submit-button"]');
        this.successfulSubmitMessage = page.locator('.status.alert.alert-success');
    }

    async submitContactUsForm(contactUsForm: ContactUsForm): Promise<void> {
        await this.navigateTo('/');

        await this.navbar.clickContactUsButton();
        await expect(this.pageTitle).toBeVisible();

        await this.uploadFile(contactUsForm.pathToFile);
        await this.nameField.type(contactUsForm.name);
        await this.emailField.type(contactUsForm.email);
        await this.messageField.type(contactUsForm.message);
        await this.subjectField.type(contactUsForm.subject);

        await this.handleDialog();
        await this.page.keyboard.press('Enter');
    }

    async uploadFile(pathToFile: string): Promise<void> {
        await this.uploadFileButton.setInputFiles(pathToFile);
    }
}