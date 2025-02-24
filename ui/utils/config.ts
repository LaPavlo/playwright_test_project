import {User} from "../models/User";
import {RegisterUser} from "../models/RegisterUser";
import {generateRandomEmail, generateRandomUsername} from "./randomData";

export const users = {
    admin: new User('demo@ggmail.com', 'y@9xbUTy5gCfV'),
    invalidCred: new User('de@moggmail.com', 'y@9xbUTy5g655')
};

export const userToRegister = {
    newUser: new RegisterUser(generateRandomUsername(), generateRandomEmail())
}
