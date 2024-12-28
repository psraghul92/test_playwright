import { type Locator, type Page } from '@playwright/test';

export class DragAndDrop {
    
    dragAndDropLink: Locator
    aBox: string
    bBox: string
    aBoxText: Locator
    bBoxText:Locator

    constructor(page:Page) {
         this.dragAndDropLink = page.locator('a', {hasText : 'Drag and Drop' })
         this.aBox = "//div[@id='column-a']//header"
         this.bBox = "//div[@id='column-b']//header"
         this.aBoxText = page.locator(this.aBox)
         this.bBoxText = page.locator(this.bBox)
    }

    async gotoDragAndDropPage() {
        await this.dragAndDropLink.click()
    }
        
}
