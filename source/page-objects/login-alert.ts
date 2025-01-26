import { type Locator, type Page } from '@playwright/test';

export class BasicAuth {
    basicAuthLink: Locator;
    basicAuthSuccess: Locator
    constructor(page:Page) {
         this.basicAuthLink = page.locator('a', {hasText : 'Basic Auth' })
         this.basicAuthSuccess = page.locator("//div[@class= 'example']//h3")

    }

    async gotoBasicAuthPage() {
        await this.basicAuthLink.click()
    }

}