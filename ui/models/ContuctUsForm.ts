import {fakerEN_US as faker} from '@faker-js/faker';

export class ContactUsForm{
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
    pathToFile?: string;

    constructor(
        {
            name,
            email,
            subject,
            message,
            pathToFile
        }: {
            name?: string,
            email?: string,
            subject?: string,
            message?: string,
            pathToFile?: string}) {

            this.name = name;
            this.email = email;
            this.subject = subject;
            this.message = message;
            this.pathToFile = pathToFile;
    }
    static createContactUsMessage(formData: {
        name?: string;
        email?: string;
        subject?: string;
        message?: string;
        pathToFile?: string;
    }): ContactUsForm{
        return new ContactUsForm(formData);
    }
}

export const contactUsMessage: ContactUsForm = ContactUsForm.createContactUsMessage({
    name: faker.person.firstName(),
    email: faker.internet.email(),
    subject: faker.lorem.word(),
    message: faker.lorem.sentence(),
    pathToFile: 'ui/utils/img.png'
});