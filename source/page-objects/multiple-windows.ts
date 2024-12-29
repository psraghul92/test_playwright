import { type Locator, type Page } from '@playwright/test';

export class MultipleWindows {
    multipleWindowsLink: Locator;
    newWindowLink: Locator
   
    constructor(page:Page) {
         this.multipleWindowsLink = page.locator('a', {hasText : 'Multiple Windows' })
         this.newWindowLink = page.locator("//a[@href='/windows/new']")
        

    }

    async gotomultipleWindowsPage() {
        await this.multipleWindowsLink.click()
    }

}