import {Locator, Page} from '@playwright/test';
import {BasePage} from './BasePage';
import {CreditCard} from '../models/CreditCard';
import {User} from '../models/User';

export class PaymentPage extends BasePage{
    readonly cardName: Locator;
    readonly cardNumber: Locator;
    readonly cvc: Locator;
    readonly expirationMonth: Locator;
    readonly expirationYear: Locator;
    readonly confirmOrderButton: Locator;

    constructor(page: Page) {
        super(page);
        this.cardName = page.locator('[data-qa="name-on-card"]');
        this.cardNumber = page.locator('[data-qa="card-number"]');
        this.cvc = page.locator('[data-qa="cvc"]');
        this.expirationMonth = page.locator('[data-qa="expiry-month"]');
        this.expirationYear = page.locator('[data-qa="expiry-year"]');
        this.confirmOrderButton = page.locator('[data-qa="pay-button"]');
    }

    async clickConfirmOrderButton() {
        await this.confirmOrderButton.click();
    }

    async fillInCardFieldsAndConfirm(card: CreditCard, user: User) {
        await this.cardName.pressSequentially(user.name);
        await this.cardNumber.pressSequentially(card.cardNumber);
        await this.expirationMonth.pressSequentially(card.expirationMonth);
        await this.expirationYear.pressSequentially(card.expirationYear);
        await this.cvc.pressSequentially(card.cvc);
        await this.clickConfirmOrderButton();
    }
}