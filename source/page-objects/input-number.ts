import { type Locator, type Page } from '@playwright/test';

export class inputNumber {
    inputNumberLink: Locator;
    inputTextBox: string

    constructor(page:Page) {
         this.inputNumberLink = page.locator('a', {hasText : 'Inputs' })
         this.inputTextBox = "//input[@type='number']"

    }

    async gotoinputNumberPage() {
        await this.inputNumberLink.click()
    }

}