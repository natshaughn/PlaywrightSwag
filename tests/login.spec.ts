import { test } from '../fixtures/fixtures';
import { users } from '../testData/credentials';

test('login test', async ({ loginPage, inventoryPage }) => {

  await loginPage.goto(); 
  await loginPage.login(users.standard.username, users.standard.password);

  await inventoryPage.waitForPage(); 
  await inventoryPage.assertHeaderText('Products'); 
});