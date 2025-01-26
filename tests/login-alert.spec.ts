import { test, expect,Page } from '@playwright/test';
import { BasicAuth } from '../source/page-objects/login-alert';


let page: Page;
let basicAuth: BasicAuth;
let context
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  context = await browser.newContext({
    httpCredentials: {
        username: 'admin',
        password: 'admin',
      },
})
})


test.afterEach(async({page}) => {
  await page.goBack();
})

test.afterAll(async({browser})=> {
  browser.close()
})

test('Validate the Basic Auth alert', async ({  }) => {
    const auth = await context.newPage();
    await auth.goto("" + "basic_auth");
    basicAuth = new BasicAuth(auth);
    await expect(basicAuth.basicAuthSuccess).toHaveText("Basic Auth")
  });