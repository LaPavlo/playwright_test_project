import { CreditCard } from './CreditCard';

export class CreditCardBuilder {
    private data: Partial<CreditCard> = {
        cardName: 'John Doe',
        cardNumber: '4111111111111111',
        cvc: '123',
        expirationMonth: '12',
        expirationYear: '2027',
    };

    withCardName(name: string): this {
        this.data.cardName = name;
        return this;
    }

    withCardNumber(number: string): this {
        this.data.cardNumber = number;
        return this;
    }

    withCVC(cvc: string): this {
        this.data.cvc = cvc;
        return this;
    }

    withExpirationMonth(month: string): this {
        this.data.expirationMonth = month;
        return this;
    }

    withExpirationYear(year: string): this {
        this.data.expirationYear = year;
        return this;
    }

    build(): CreditCard {
        return new CreditCard(this.data);
    }
}

export const card = new CreditCardBuilder()
    .withCardName('Jane Doe')
    .withCardNumber('4000123412341234')
    .withCVC('999')
    .withExpirationMonth('10')
    .withExpirationYear('2026')
    .build();