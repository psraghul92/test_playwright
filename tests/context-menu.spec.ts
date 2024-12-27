import { test, expect,Page } from '@playwright/test';
import {contextMenu} from '../source/page-objects/context-menu';

let page: Page;
let contextmenu: contextMenu;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    contextmenu = new contextMenu(page);
  })

  test.beforeEach(async ({}) => {
    await page.goto('');
    await contextmenu.contextMenuLink.click()
   });

   test.afterEach(async({page}) => {
    await page.goBack();
  })

//   test.afterAll(async({browser})=> {
//     browser.close()
//   })

  test('Validate if right click is performed', async ({ page }) => {
      contextmenu.clickRightclickArea()
      let alertPresent = false;
      page.on('dialog', async dialog => {
        console.log(`Dialog detected with message: ${dialog.message()}`);
        alertPresent = true; // Set the flag to true if a dialog is detected
        await dialog.accept(); // Accept the dialog to continue
      });
      if (alertPresent) {
        console.log('Alert was present.');
      } else {
        console.log('No alert detected.');
      }
  });
  