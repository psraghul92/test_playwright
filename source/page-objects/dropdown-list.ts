import { type Locator, type Page } from '@playwright/test';

export class DropdownList {
    dropdownLink: Locator;
    dropdownLocator: string;
    selectedOption: Locator;

    constructor(page:Page) {
         this.dropdownLink = page.locator('a', {hasText : 'Dropdown' })
         this.dropdownLocator = 'select#dropdown' 
         this.selectedOption = page.locator('#dropdown [selected="selected"]');
    }

    async gotoDropdownListPage() {
        await this.dropdownLink.click()
    }
}