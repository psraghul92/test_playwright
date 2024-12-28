import { type Locator, type Page } from '@playwright/test';

export class contextMenu {
    hotspot: string
    contextMenuLink: Locator;
    rightClickArea: Locator
  
    constructor(page:Page) {
         this.contextMenuLink = page.locator('a', {hasText : 'Context Menu' })
         this.rightClickArea = page.locator('//div[@id="hot-spot"]')
         this.hotspot = '#hot-spot'
    }

}