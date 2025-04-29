import { Page } from '@playwright/test';

export class BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        if (!page) throw new Error('❌ Page is undefined. Make sure to pass it in the constructor.');
        this.page = page;
    }

    async navigateTo(link: string) {
        if (!link) throw new Error('❌ URL is empty! Provide a valid link.');
        console.log(`Navigate to ${link}`);
        await this.page.goto(link);
    }

    async handleDialog() {
        this.page.on('dialog', async (dialog) => {
            console.log(dialog.message());
            await dialog.accept();
        });
    }
}