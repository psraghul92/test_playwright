import { test, expect,Page } from '@playwright/test';
import { AddRemoveElement } from '../source/page-objects/add-remove-element';


let page: Page;
let addRemoveElement: AddRemoveElement;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  addRemoveElement = new AddRemoveElement(page);
})

test.beforeEach(async ({}) => {
   await page.goto('');
   await addRemoveElement.gotoAddRemoveElementPage();
  });

test.afterEach(async({page}) => {
  await page.goBack();
})

test.afterAll(async({browser})=> {
  browser.close()
})

test('Validate if an element can be added', async ({ page }) => {
    await addRemoveElement.addElementButton.click()
    var countelement = await addRemoveElement.addedElements.count()
    expect(countelement).toEqual(1)
  });


  test ('Validate if an element can be delete', async({page}) => {
    await addRemoveElement.addElementButton.click()
    var countelement = await addRemoveElement.addedElements.count()
    expect(countelement).toEqual(1)
    await addRemoveElement.deleteElementButton.click()
    var countelement = await addRemoveElement.addedElements.count()
    expect(countelement).toEqual(0)
  })