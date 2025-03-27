export class User {
    email: string;
    password: string;
  //  email?: string;

    constructor(username: string, password: string) {
        this.email = username;
        this.password = password;
    }

    static userToLogin(email: string, password: string): User {
        return new User(email, password);
    }
}
