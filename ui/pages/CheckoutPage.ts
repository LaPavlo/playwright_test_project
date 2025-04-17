import {expect, Locator, Page} from '@playwright/test';
import {BasePage} from './BasePage';
import {User} from '../models/User';
import {faker} from '@faker-js/faker/locale/en_US';

export class CheckoutPage extends BasePage{
    readonly placeOrderButton: Locator;
    readonly name: Locator;
    readonly address: Locator;
    readonly cityStateZip: Locator;
    readonly country: Locator;
    readonly phoneNumber: Locator;
    readonly commentField: Locator;

    constructor(page: Page) {
        super(page);
        this.placeOrderButton = page.locator('a[href="/payment"]');
        this.name = page.locator('#address_delivery .address_firstname');
        this.address = page.locator('#address_delivery .address_address1').filter({
            hasText: /.+/,
        });
        this.cityStateZip = page.locator('#address_delivery .address_city');
        this.country = page.locator('#address_delivery .address_country_name');
        this.phoneNumber = page.locator('#address_delivery .address_phone');
        this.commentField = page.locator('.form-control');
    }

    async clickPlaceOrder(){
        await this.placeOrderButton.click();
    }

    async fillInCommentFieldAndPlaceOrder(){
        await this.commentField.pressSequentially(faker.lorem.sentence(2));
        await this.clickPlaceOrder();
    }

    async getAddress(){
       return await this.address.first().textContent();
    }

    async getCityStateZip(){
        return await this.cityStateZip.textContent();
    }

    async verifyDeliveryAddress(user: User){
        await expect.soft(this.name).toContainText(`${user.firstName} ${user.lastName}`);
        await expect.soft(await  this.getAddress()).toContain(`${user.address}`);
        await expect.soft(await  this.getCityStateZip()).toContain(`${user.city} ${user.state}`);
        await expect.soft(this.phoneNumber).toContainText(`${user.mobilePhone}`);
    }
}