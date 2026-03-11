import { test } from '../fixtures/fixtures';
import { users } from '../testData/credentials';

test.describe('Login Tests', () => {

  test('login test', async ({ loginPage, inventoryPage }) => {
    await loginPage.goto(); 
    await loginPage.login(users.standard.username, users.standard.password);
    await inventoryPage.waitForInventoryPage(); 
    await inventoryPage.assertInventoryHeaderText('Products'); 
  });

test('login error message test', async ({ loginPage }) => {
    await loginPage.goto(); 
    await loginPage.login(users.locked.username, users.locked.password);
    await loginPage.assertLoginErrorText('Epic sadface: Sorry, this user has been locked out.');
  });
});
