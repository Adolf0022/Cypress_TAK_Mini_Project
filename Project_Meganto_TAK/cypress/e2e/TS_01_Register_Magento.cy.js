describe('TC_a_Register_Success', () => {
    it('test_01_Create_Account_With_Valid_Data', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      
      // Click the sign in Link
      cy.get('html > body > div:nth-of-type(2) > header > div:first-of-type > div > ul > li:nth-of-type(3) > a').click();
      // Verify Create Account Page is open
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/')
      // Set First name
      let firstname = 'Haji'
      cy.get('#firstname').type(firstname)
      // Set Last Name 
      let lastname = 'Dono'
      cy.get('#lastname').type(lastname)
      // Set Email
      let randomnumber = Math.floor(Math.random() * 100);
      let email = lastname + firstname + randomnumber + '@gmail.com'
      cy.get('#email_address').type(email)
      // Set Password 
      cy.get('#password').type('Semangat45')
      // Verify the password is strong 
      cy.get('#password-strength-meter-label').should('have.text','Strong')
      // Set Password Confirm Password 
      cy.get('#password-confirmation').type('Semangat45')
      // Click Button 'Create an Account
      cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()

      // Verify user directed to account page
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/')
      cy.get('.base').should('have.text','My Account')
      // Verify message 'Thank you for registering with Main Website Store' is appear
      cy.get('#maincontent > div:first-of-type > div:nth-of-type(2) > div > div > div').should('have.text','Thank you for registering with Main Website Store.')

      // Verify user name and email is show in account page
      cy.get('.box-content > p').should('contain', firstname + ' ' + lastname);
      cy.get('.box-content > p').should('contain', email)
    });

    it('test_02_Create_Account_Without_FirstName', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      // Click the sign in Link
      cy.get('html > body > div:nth-of-type(2) > header > div:first-of-type > div > ul > li:nth-of-type(3) > a').click();
      // Verify Create Account Page is open
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/')
      // Set Last Name  
      let lastname = 'Dono'
      cy.get('#lastname').type(lastname)
      // Set Email
      let randomnumber = Math.floor(Math.random() * 100);
      let email = lastname + randomnumber + '@gmail.com'
      cy.get('#email_address').type(email)
      // Set Password 
      cy.get('#password').type('Semangat45')
      // Verify the password is strong 
      cy.get('#password-strength-meter-label').should('have.text','Strong')
      // Set Password Confirm Password 
      cy.get('#password-confirmation').type('Semangat45')
      // Click Button 'Create an Account
      cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()

      // Verify user is stay on page Create Account
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/')
      cy.get('.base').should('have.text','Create New Customer Account')
      // Verify message 'This is a required field'
      cy.get("#firstname-error").should('have.text','This is a required field.')

    });

    it('test_03_Create_Account_Without_LastName', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      // Click the sign in Link
      cy.get('html > body > div:nth-of-type(2) > header > div:first-of-type > div > ul > li:nth-of-type(3) > a').click();
      // Verify Create Account Page is open
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/')
      // Set First name
      let firstname = 'Haji'
      cy.get('#firstname').type(firstname)
      // Set Email
      let randomnumber = Math.floor(Math.random() * 100);
      let email = firstname + randomnumber + '@gmail.com'
      cy.get('#email_address').type(email)
      // Set Password 
      cy.get('#password').type('Semangat45')
      // Verify the password is strong 
      cy.get('#password-strength-meter-label').should('have.text','Strong')
      // Set Password Confirm Password 
      cy.get('#password-confirmation').type('Semangat45')
      // Click Button 'Create an Account
      cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
      // Verify user is stay on page Create Account
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/')
      cy.get('.base').should('have.text','Create New Customer Account')
      // Verify message 'This is a required field'
      cy.get("#lastname-error").should('have.text','This is a required field.')

    });

    it('test_04_Create_Account_Without_Email', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      // Click the sign in Link
      cy.get('html > body > div:nth-of-type(2) > header > div:first-of-type > div > ul > li:nth-of-type(3) > a').click();
      // Verify Create Account Page is open
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/')
      // Set First name
      let firstname = 'Haji'
      cy.get('#firstname').type(firstname)
      // Set Last Name  
      let lastname = 'Dono'
      cy.get('#lastname').type(lastname)
      // Set Password 
      cy.get('#password').type('Semangat45')
      // Verify the password is strong 
      cy.get('#password-strength-meter-label').should('have.text','Strong')
      // Set Password Confirm Password 
      cy.get('#password-confirmation').type('Semangat45')
      // Click Button 'Create an Account
      cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
      // Verify user is stay on page Create Account
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/')
      cy.get('.base').should('have.text','Create New Customer Account')
      // Verify message 'This is a required field'
      cy.get("#email_address-error").should('have.text','This is a required field.')
    });

    it('test_05_Create_Account_Without_Password', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      // Click the sign in Link
      cy.get('html > body > div:nth-of-type(2) > header > div:first-of-type > div > ul > li:nth-of-type(3) > a').click();
      // Verify Create Account Page is open
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/')
      // Set First name
      let firstname = 'Haji'
      cy.get('#firstname').type(firstname)
      // Set Last Name  
      let lastname = 'Dono'
      cy.get('#lastname').type(lastname)
     // Set Email
     let randomnumber = Math.floor(Math.random() * 100);
     let email = lastname + firstname + randomnumber + '@gmail.com'
     cy.get('#email_address').type(email)
      // Verify password Strong
      cy.get('#password-strength-meter-label').should('have.text','No Password')
      // Set Password Confirm Password 
      cy.get('#password-confirmation').type('Semangat45')
      // Click Button 'Create an Account
      cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
      // Verify user is stay on page Create Account
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/')
      cy.get('.base').should('have.text','Create New Customer Account')
      // Verify message 'This is a required field'
      cy.get("#password-error").should('have.text','This is a required field.')
      // Verify Message 'Please enter the same value again.' 
      cy.get("#password-confirmation-error").should('have.text','Please enter the same value again.')

    });

    it('test_06_Create_Account_Without_Set_Confirm_Password', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      // Click the sign in Link
      cy.get('html > body > div:nth-of-type(2) > header > div:first-of-type > div > ul > li:nth-of-type(3) > a').click();
      // Verify Create Account Page is open
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/')
      // Set First name
      let firstname = 'Haji'
      cy.get('#firstname').type(firstname)
      // Set Last Name  
      let lastname = 'Dono'
      cy.get('#lastname').type(lastname)
      // Set Email
      let randomnumber = Math.floor(Math.random() * 100);
      let email = lastname + firstname + randomnumber + '@gmail.com'
      cy.get('#email_address').type(email)
      // Set Password
      cy.get('#password').type('Semangat45')
      // Verify the password is strong 
      cy.get('#password-strength-meter-label').should('have.text','Strong')
      // Click Button 'Create an Account
      cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
      // Verify user is stay on page Create Account
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/')
      cy.get('.base').should('have.text','Create New Customer Account')
      // Verify Message 'This is a required field.' 
      cy.get("#password-confirmation-error").should('have.text','This is a required field.')

    });

    it('test_07_Verify_When_Password_is_Weak', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      // Click the sign in Link
      cy.get('html > body > div:nth-of-type(2) > header > div:first-of-type > div > ul > li:nth-of-type(3) > a').click();
      // Verify Create Account Page is open
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/')
      // Set First name
      let firstname = 'Haji'
      cy.get('#firstname').type(firstname)
      // Set Last Name  
      let lastname = 'Dono'
      cy.get('#lastname').type(lastname)
      // Set Email
      let randomnumber = Math.floor(Math.random() * 100);
      let email = lastname + firstname + randomnumber + '@gmail.com'
      cy.get('#email_address').type(email)
      // Set Password
      cy.get('#password').type('123')
      // Verify the password is Weaks 
      cy.get('#password-strength-meter-label').should('have.text','Weak')

    });

    it('test_08_Verify_When_Password_is_Very_Strong', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      // Click the sign in Link
      cy.get('html > body > div:nth-of-type(2) > header > div:first-of-type > div > ul > li:nth-of-type(3) > a').click();
      // Verify Create Account Page is open
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/')
      // Set First name
      let firstname = 'Haji'
      cy.get('#firstname').type(firstname)
      // Set Last Name  
      let lastname = 'Dono'
      cy.get('#lastname').type(lastname)
      // Set Email
      let randomnumber = Math.floor(Math.random() * 100);
      let email = lastname + firstname + randomnumber + '@gmail.com'
      cy.get('#email_address').type(email)
      // Set Password
      cy.get('#password').type('Semangat45!')
      // Verify the password is Weaks 
      cy.get('#password-strength-meter-label').should('have.text','Very Strong')

    });

    it('test_09_Verify_When_Password_is_Low_and_not_Valid', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      // Click the sign in Link
      cy.get('html > body > div:nth-of-type(2) > header > div:first-of-type > div > ul > li:nth-of-type(3) > a').click();
      // Verify Create Account Page is open
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/')
      // Set First name
      let firstname = 'Haji'
      cy.get('#firstname').type(firstname)
      // Set Last Name  
      let lastname = 'Dono'
      cy.get('#lastname').type(lastname)
      // Set Email
      let randomnumber = Math.floor(Math.random() * 100);
      let email = lastname + firstname + randomnumber + '@gmail.com'
      cy.get('#email_address').type(email)
      // Set Password
      cy.get('#password').type('123')
      // Verify the password is Weaks 
      cy.get('#password-strength-meter-label').should('have.text','Very Strong')
      // Verify the password is not valid
      cy.get("#password-error").should('have.text','Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')

    });

    it('test_10_Create_Account_With_Empty_Field', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      // Click the sign in Link
      cy.get('html > body > div:nth-of-type(2) > header > div:first-of-type > div > ul > li:nth-of-type(3) > a').click();
      // Verify Create Account Page is open
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/')

      // Click Button 'Create an Account
      cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
      // Verify user is stay on page Create Account
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/')
      cy.get('.base').should('have.text','Create New Customer Account')
      // Verify Message 'This is a required field.' 
      cy.get("#firstname-error").should('have.text','This is a required field.')
      cy.get("#lastname-error").should('have.text','This is a required field.')
      cy.get("#email_address-error").should('have.text','This is a required field.')
      cy.get("#password-error").should('have.text','This is a required field.')
      cy.get("#password-confirmation-error").should('have.text','This is a required field.')

    });

});

  