import { TestInfo } from '@playwright/test';

export class Logger {
    private testInfo: TestInfo;

    constructor(testInfo: TestInfo) {
        this.testInfo = testInfo;
    }

    async logToReport(message: string) {
        console.log(`[LOG] ${message}`);

        await this.testInfo.attach('Log Message', {
            body: message,
            contentType: 'text/plain',
        });
    }
}
