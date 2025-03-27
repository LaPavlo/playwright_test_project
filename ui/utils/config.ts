import {User} from "../models/User";


export const users = {
    admin: User.userToLogin('demo@ggmail.com', 'y@9xbUTy5gCfV'),
    invalidCred: User.userToLogin('de@moggmail.com', 'y@9xbUTy5g655')
};

// export const userToRegister = {
//     newUser: new UserBuilder(generateRandomUsername(), generateRandomEmail())
// }
