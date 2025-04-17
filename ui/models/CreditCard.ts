export class CreditCard {
    cardName?: string;
    cardNumber?: string;
    cvc?: string;
    expirationMonth?: string;
    expirationYear?: string;

    constructor(data: Partial<CreditCard> = {}) {
        Object.assign(this, data);
    }
}