import {faker} from "@faker-js/faker/locale/en_US";

export class User {
    email: string;
    password?: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    address?: string;
    state?: string;
    city?: string;
    zipcode?: string;
    mobilePhone?: string;

    //Object-Based Constructor
    constructor({
                    email,
                    password,
                    name,
                    firstName,
                    lastName,
                    address,
                    state,
                    city,
                    zipcode,
                    mobilePhone
                }: {
        email: string;
        password?: string;
        name?: string;
        firstName?: string;
        lastName?: string;
        address?: string;
        state?: string;
        city?: string;
        zipcode?: string;
        mobilePhone?: string;
    }) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.state = state;
        this.city = city;
        this.zipcode = zipcode;
        this.mobilePhone = mobilePhone;
    }

    static createUser(userData: {
        email: string;
        password?: string;
        name?: string;
        firstName?: string;
        lastName?: string;
        address?: string;
        state?: string;
        city?: string;
        zipcode?: string;
        mobilePhone?: string;
    }): User {
        return new User(userData);
    }
}

export const userToRegister: User = User.createUser({
    email: faker.internet.email(),
    name: faker.person.firstName(),
    password: faker.internet.password(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    address: faker.location.streetAddress(),
    state: faker.location.state(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode(),
    mobilePhone: faker.phone.number()
})

export const userToLogin: User = User.createUser({
    email: 'demo@ggmail.com',
    password: 'y@9xbUTy5gCfV',
    name: faker.person.firstName(),
})

export const invalidCredUser: User = User.createUser({
    email: 'demo@ggmai.com',
    password: 'y@9xbUTy5gCfV'
})
