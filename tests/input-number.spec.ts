import { test, expect,Page } from '@playwright/test';
import { inputNumber } from '../source/page-objects/input-number';


let page: Page;
let inputNumberPage: inputNumber;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  inputNumberPage = new inputNumber(page);
})

test.beforeEach(async ({}) => {
   await page.goto('');
   await inputNumberPage.gotoinputNumberPage();
});

test.afterEach(async({page}) => {
  await page.goBack();
})

test.afterAll(async({browser})=> {
  browser.close()
})

test('Validate if an element can be added', async ({ }) => {
    await page.click(inputNumberPage.inputTextBox)
    await page.keyboard.type('1')
  });
