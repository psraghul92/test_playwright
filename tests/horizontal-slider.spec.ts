import { test, expect,Page } from '@playwright/test';
import { horizontalSlider } from '../source/page-objects/horizontal-slider';


let page: Page;
let horizontalSliderPage: horizontalSlider;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  horizontalSliderPage = new horizontalSlider(page);
})

test.beforeEach(async ({}) => {
   await page.goto('');
   await horizontalSliderPage.gotohorizontalSliderPage();
  });

test.afterEach(async({}) => {
  await page.goBack();
})

test.afterAll(async({browser})=> {
  browser.close()
})

test('Validate if an element can be added', async ({ }) => {
    await page.click(horizontalSliderPage.horizontalSliderContainer)
    for (let i=0;i<=2; i = i+0.5){
        await page.keyboard.press('ArrowLeft')
     }
     for (let i=0;i<=1; i = i+0.5){
        await page.keyboard.press('ArrowRight')
     }
    const horizontalSlidervalue = await horizontalSliderPage.horizontalSliderValue.textContent()
    expect(horizontalSlidervalue).toEqual('1.5')
    
  });
