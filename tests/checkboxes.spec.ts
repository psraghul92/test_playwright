import { test, expect,Page } from '@playwright/test';
import {CheckBoxes} from '../source/page-objects/checkboxes'; 

let page: Page;
let checkboxes: CheckBoxes;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    checkboxes = new CheckBoxes(page);
  })

  test.beforeEach(async ({}) => {
    await page.goto('');
    await checkboxes.checkboxesLink.click();
   });

   test.afterEach(async({page}) => {
    await page.goBack();
  });

//   test.afterAll(async({browser})=> {
//     browser.close()
//   });

  test('Validate if checkbox can be checked', async ({ page }) => {
    await checkboxes.uncheckCheckbox(2)
    await checkboxes.checkCheckbox(1)
    await expect(checkboxes.page.locator(checkboxes.checkbox1)).toBeChecked()
    await expect(checkboxes.page.locator(checkboxes.checkbox2)).not.toBeChecked()
  });