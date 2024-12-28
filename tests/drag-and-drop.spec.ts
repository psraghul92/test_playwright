import { test, expect,Page } from '@playwright/test';
import { DragAndDrop } from '../source/page-objects/drag-and-drop';


let page: Page;
let dragAndDropbox: DragAndDrop;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    dragAndDropbox = new DragAndDrop(page);
  })

  test.beforeEach(async ({}) => {
    await page.goto('');
    await dragAndDropbox.gotoDragAndDropPage();
   });
 
   test.afterEach(async({page}) => {
    await page.goBack();
  })
  
  test.afterAll(async({browser})=> {
    browser.close()
  })

  test('Validate if element can be draged and dropped', async ({}) => {
     let aColumnTextBeforeDrag = await dragAndDropbox.aBoxText.textContent()
     let bColumnTextBeforeDrag = await dragAndDropbox.bBoxText.textContent()
     expect(aColumnTextBeforeDrag).toEqual('A')
     expect(bColumnTextBeforeDrag).toEqual('B')
     await page.dragAndDrop(dragAndDropbox.aBox,dragAndDropbox.bBox)
     let aColumnTextAfterDrag = await dragAndDropbox.aBoxText.textContent()
     let bColumnTextAfterDrag = await dragAndDropbox.bBoxText.textContent()
     expect(aColumnTextAfterDrag).toEqual('B')
     expect(bColumnTextAfterDrag).toEqual('A')
  });