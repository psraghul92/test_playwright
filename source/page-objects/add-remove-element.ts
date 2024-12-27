import { expect, type Locator, type Page } from '@playwright/test';

export class AddRemoveElement {
    addRemoveElementLink: Locator;
    addElementButton: Locator
    addedElements: Locator
    deleteElementButton: Locator
    constructor(page:Page) {
         this.addRemoveElementLink = page.locator('a', {hasText : 'Add/Remove Elements' })
         this.addElementButton = page.locator('button',{hasText: 'Add Element'})
         this.addedElements = page.locator("//div[@id='elements']//button")
         this.deleteElementButton = page.locator('button',{hasText: 'Delete'})

    }

    async gotoAddRemoveElementPage() {
        await this.addRemoveElementLink.click()
    }

}