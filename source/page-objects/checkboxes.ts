import { type Locator, type Page,expect } from '@playwright/test';

export class CheckBoxes {
    page: Page
    checkboxesLink: Locator;
    checkbox1: string;
    checkbox2: string;
    
    constructor(page:Page) {
         this.page = page
         this.checkboxesLink = page.locator('a', {hasText : 'Checkboxes' })
         this.checkbox1 = "//form[@id='checkboxes']/input[1]"
         this.checkbox2 = "//form[@id='checkboxes']/input[2]"

    }

    async gotoAddRemoveElementPage() {
        await this.checkboxesLink.click()
    }

    async checkCheckbox(checkboxNumber: number) {
        await this.page.check(`//form[@id='checkboxes']/input[${checkboxNumber}]`)
    }

    async uncheckCheckbox(checkboxNumber: number) {
        await this.page.uncheck(`//form[@id='checkboxes']/input[${checkboxNumber}]`)
    }

}