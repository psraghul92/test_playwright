import { test, expect,Page } from '@playwright/test';
import { DropdownList } from '../source/page-objects/dropdown-list';


let page: Page;
let dropdownlist: DropdownList;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    dropdownlist = new DropdownList(page);
  })

  test.beforeEach(async ({}) => {
    await page.goto('');
    await dropdownlist.gotoDropdownListPage();
   });

   test.afterEach(async({page}) => {
    await page.goBack();
  })

  test.afterAll(async({browser})=> {
    browser.close()
  })

  test('Validate if dropdown can be selected', async ({}) => {
    await page.selectOption(dropdownlist.dropdownLocator,'1')
    let selectedOption = await dropdownlist.selectedOption.textContent()
    expect(selectedOption).toEqual('Option 1')
  
});