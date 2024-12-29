import { type Locator, type Page } from '@playwright/test';

export class horizontalSlider {
    horizontalSliderLink: Locator;
    horizontalSliderContainer: string
    horizontalSliderValue: Locator
    
    constructor(page:Page) {
         this.horizontalSliderLink = page.locator('a', {hasText : 'Horizontal Slider' })
         this.horizontalSliderContainer = "//div['sliderContainer']//input"
         this.horizontalSliderValue = page.locator("//span[@id='range']")
    }

    async gotohorizontalSliderPage() {
        await this.horizontalSliderLink.click()
    }

}