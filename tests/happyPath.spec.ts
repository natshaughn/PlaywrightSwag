import { test } from '../fixtures/fixtures';
import { users } from '../testData/credentials';
import { generateCustomer } from '../testData/customerData';

const customer = generateCustomer();

    test('Happy Path e2e', async ({ loginPage, inventoryPage, cartPage, headerBar, checkoutStepOnePage, checkoutStepTwoPage, checkoutCompletePage }) => {

        await loginPage.goto(); 
        await loginPage.login(users.standard.username, users.standard.password);

        await inventoryPage.waitForInventoryPage(); 
        await inventoryPage.assertInventoryHeaderText('Products'); 
        await inventoryPage.addProductToCart('Sauce Labs Onesie');

        await headerBar.clickCart();
        await headerBar.assertCartBadgeCount(1);

        await cartPage.waitForCartPage();
        await cartPage.assertNumberOfItemsInCart(1);
        await cartPage.assertProductVisible('Sauce Labs Onesie');
        await cartPage.clickCheckoutButton();

        await checkoutStepOnePage.waitForCheckoutStepOnePage();
        await checkoutStepOnePage.enterCustomerDetails(customer.firstName, customer.lastName, customer.postcode);
        await checkoutStepOnePage.clickContinue();

        await checkoutStepTwoPage.waitForCheckoutStepTwoPage();
        await checkoutStepTwoPage.assertNumberOfItems(1);
        await checkoutStepTwoPage.assertProductVisible('Sauce Labs Onesie');
        await checkoutStepTwoPage.assertPaymentInformation();
        await checkoutStepTwoPage.assertShippingInformation();
        await checkoutStepTwoPage.assertTotalPrice(8.63);
        await checkoutStepTwoPage.clickFinishButton();

        await checkoutCompletePage.waitForCheckoutCompletePage();
        await checkoutCompletePage.assertCompleteHeader('Thank you for your order!');
        await checkoutCompletePage.assertOrderConfirmationText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    }); 


    test('Add one item to shopping Cart', async ({ loginPage, inventoryPage, headerBar })  => {
        
        await loginPage.goto(); 
        await loginPage.login(users.standard.username, users.standard.password);
            
        await inventoryPage.waitForInventoryPage(); 
        await inventoryPage.assertInventoryHeaderText('Products'); 
        await inventoryPage.addProductToCart('Sauce Labs Backpack');

        await headerBar.assertCartBadgeCount(1);        
    });

    test('Add multiple items to shopping Cart', async ({ loginPage, inventoryPage, headerBar })  => {
        
        await loginPage.goto(); 
        await loginPage.login(users.standard.username, users.standard.password);
            
        await inventoryPage.waitForInventoryPage(); 
        await inventoryPage.assertInventoryHeaderText('Products'); 

        await inventoryPage.addProductToCart('Sauce Labs Backpack');
        await headerBar.assertCartBadgeCount(1);
        await inventoryPage.addProductToCart('Sauce Labs Bike Light');
        await headerBar.assertCartBadgeCount(2);
        await inventoryPage.addProductToCart('Sauce Labs Bolt T-Shirt');
        await headerBar.assertCartBadgeCount(3);
        await inventoryPage.addProductToCart('Sauce Labs Fleece Jacket');
        await headerBar.assertCartBadgeCount(4);
        await inventoryPage.addProductToCart('Sauce Labs Onesie');
        await headerBar.assertCartBadgeCount(5);
        await inventoryPage.addProductToCart('Test.allTheThings() T-Shirt (Red)');
        await headerBar.assertCartBadgeCount(6);   
    });
