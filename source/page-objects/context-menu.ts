import { type Locator, type Page } from '@playwright/test';

export class contextMenu {
    page: Page
    contextMenuLink: Locator;
    rightClickArea: Locator
  
    constructor(page:Page) {
         this.page = page
         this.contextMenuLink = page.locator('a', {hasText : 'Context Menu' })
         this.rightClickArea = page.locator('//div[@id="hot-spot"]')
    }

     async clickRightclickArea(){
         await this.page.click('#hot-spot', { button: 'right' });
    }

}