import {BasePage} from './BasePage';
import {expect, Locator, Page} from '@playwright/test';
import {ContactUsForm} from '../models/ContuctUsForm';
import {HeaderNavBarPage} from './HeaderNavBarPage';

export class ContactUsPage extends BasePage{
    readonly pageTitle: Locator;
    readonly nameField: Locator;
    readonly emailField: Locator;
    readonly subjectField: Locator;
    readonly messageField: Locator;
    readonly uploadFileButton: Locator;
    readonly submitButton: Locator;
    readonly successfulSubmitMessage: Locator;
    readonly homeButton: Locator;
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
        this.homeButton = page.locator('//span[normalize-space()="Home"]');
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

    async clickHomeAndVerifyNavigation(): Promise<void> {
        await this.homeButton.click();
        await expect(this.page.url()).toEqual('https://automationexercise.com/');
    }
}