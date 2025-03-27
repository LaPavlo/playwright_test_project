import {faker} from "@faker-js/faker/locale/ar";

export class User {
    email: string;
    password?: string;
    name?: string;

    constructor({ email, password, name }:{email: string, password?: string, name?: string}) {
        this.email = email;
        this.password = password;
        this.name = name;
    }

    static createUser(userData: {email: string, password?: string, name?: string}): User {
        return new User(userData);
    }
}

export const userToRegister: User = User.createUser({
    email: faker.internet.email(),
    name: faker.person.firstName()
})

export const userToLogin: User = User.createUser({
    email: 'demo@ggmail.com',
    password: 'y@9xbUTy5gCfV'
})

export const invalidCredUser: User = User.createUser({
    email: 'demo@ggmai.com',
    password: 'y@9xbUTy5gCfV'
})