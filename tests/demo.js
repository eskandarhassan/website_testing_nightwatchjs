//The test class is divided in 3 parts (
    // 1. Fields
    // 2. Browser Actions
    // 3. Close browser after we finish
// )

module.exports = {
    'Input data testing #2'(browser) {
        // Usename Field
      const usernameInput = '#user-name';
      // Password Field
      const passwordInput = "#password";
      // Login Button
      const loginBtn = "#login-button";
      // Backpack Item From first page
      const backpackItem = "#add-to-cart-sauce-labs-backpack";
      // Shopping Cart Button
      const shoppingCart = "#shopping_cart_container";
      // Checkout Button
      const checkoutBtn = "#checkout";
      // First Name Field from CheckOut Page
      const firstNameField = "#first-name"
      // Last Name Field from CheckOut Page
      const lastNameField = "#last-name";
      // Postal Code/ Zip Field from CheckOut Page
      const zipCodeField = "#postal-code";
      // Continue Button From user details page
      const continueBtn = "#continue";
      // Command Overview Title
      const overviewTitle = ".title";
      // Finish Command button
      const finishBtn = "#finish";


   
      browser
      //Open Sauce Demo Page
        .url('https://www.saucedemo.com')
        //Waiting for the Username Input to be present
        .waitForElementVisible(usernameInput)
        // Set usename
        .setValue(usernameInput, "standard_user")
        // Set password
        .setValue(passwordInput, "secret_sauce")
        // Click on Login
        .click(loginBtn)
        // Waiting for the items to be present 
        .waitForElementVisible(backpackItem)
        // Add backpack to the cart
        .click(backpackItem)
        //Click on cart
        .click(shoppingCart)
        //Waiting for the checkout button to be present
        .waitForElementVisible(checkoutBtn)
        // Click on checkout
        .click(checkoutBtn)
        //Waiting for the first name field 
        .waitForElementVisible(firstNameField)
        //Set First Name
        .setValue(firstNameField, "testFirstName")
        //Set Last Name
        .setValue(lastNameField, "testLastName")
        //Set Zip Code
        .setValue(zipCodeField, "00000")
        //Clck on continue button
        .click(continueBtn)
        //Waitin for the overview title
        .waitForElementVisible(overviewTitle)
        //Click on finish button
        .click(finishBtn)
        //Verify that the order is done
        .assert.urlContains('https://www.saucedemo.com/checkout-complete.html')
        .pause(1000)
    },
   
    after: function (browser, done) {
      browser.end(function () {
        console.log("Test completed, ending browser connection");
        done();
      });
    },
   }