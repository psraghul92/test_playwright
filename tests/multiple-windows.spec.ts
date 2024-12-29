import { test, expect,Page, Browser } from '@playwright/test';
import { MultipleWindows } from '../source/page-objects/multiple-windows';


let page: Page;
let multipleWindowsPage: MultipleWindows;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  multipleWindowsPage = new MultipleWindows(page);
})

test.beforeEach(async ({}) => {
   await page.goto('');
   await multipleWindowsPage.gotomultipleWindowsPage();
  });

test.afterEach(async({}) => {
  await page.goBack();
})

test.afterAll(async({browser})=> {
  browser.close()
})

test('Validate if clicking on a link opens new tab', async ({}) => {
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        await multipleWindowsPage.newWindowLink.click()
      ])
     await newPage.waitForLoadState();
     let newWindowTitle = await newPage.title();
     expect(newWindowTitle).toEqual("New Window")
  });
