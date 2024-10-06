describe('TC_Login_Meganto', () => {
    it('test_01_Login_with_Valid_Data', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      // Click the sign in Link
      cy.get('html > body > div:nth-of-type(2) > header > div:first-of-type > div > ul > li:nth-of-type(2) > a').click()
      // Verify Create Account Page is open
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
       // Set Email
      let firstname = 'abg'
      let lastname = 'jago'
      let email = firstname + lastname + '@gmail.com'
      cy.get('#email').type(email)
      // Set Password 
      cy.get('#pass').type('Semangat45')
      // Click Button Sign in
      cy.get('#send2').click()
      cy.wait(2000)
      // Verify user directed to home page
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/')
      // Verify sytem show your name
      cy.get(':nth-child(2) > .greet > .logged-in').should('contain', 'Welcome,' +' ' + firstname + ' ' + lastname + '!');
      // Verify on home show menu Whats' new, Women, Men, Gear, Training, Sale 
      cy.get('#ui-id-3').should('have.text', "What's New")
      cy.get('#ui-id-4').should('have.text', 'Women')
      cy.get('#ui-id-5').should('have.text', 'Men')
      cy.get('#ui-id-6').should('have.text', 'Gear')
      cy.get('#ui-id-7').should('have.text', 'Training')
      cy.get('#ui-id-8').should('have.text', 'Sale')
    });

    it('test_02_Login_Without_Email', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      // Click the sign in Link
      cy.get('html > body > div:nth-of-type(2) > header > div:first-of-type > div > ul > li:nth-of-type(2) > a').click()
      cy.wait(2000)
      // Verify Create Account Page is open
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
      cy.wait(2000)
      // Set Password 
      cy.get('#pass').type('Semangat45')
      cy.wait(2000)
      // Click Button Sign in
      cy.get('#send2').click()
      cy.wait(2000)
      // Verify user still on lgin page
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
      cy.wait(2000)
      // Verify text 'This is a required field.' appears
      cy.get('#email-error').should('have.text', 'This is a required field.')
      cy.wait(2000)

    });

    it('test_03_Login_Without_Password', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      // Click the sign in Link
      cy.get('html > body > div:nth-of-type(2) > header > div:first-of-type > div > ul > li:nth-of-type(2) > a').click()
      // Verify Create Account Page is open
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
       // Set Email
       let firstname = 'abg'
       let lastname = 'jago'
       let email = firstname + lastname + '@gmail.com'
       cy.get('#email').type(email)
       cy.wait(2000)
      // Click Button Sign in
      cy.get('#send2').click()
      cy.wait(2000)
      // Verify text 'This is a required field.' appears
      cy.get('#pass-error').should('have.text', 'This is a required field.')
      cy.wait(2000)

    });

    it('test_04_Login_Without_Email_and_Password', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      // Click the sign in Link
      cy.get('html > body > div:nth-of-type(2) > header > div:first-of-type > div > ul > li:nth-of-type(2) > a').click()
      // Verify Create Account Page is open
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
      cy.wait(2000)
      // Click Button Sign in
      cy.get('#send2').click()
      cy.wait(2000)
      // Verify text 'This is a required field.' appears for email
      cy.get('#email-error').should('have.text', 'This is a required field.')
      cy.wait(2000)
      // Verify text 'This is a required field.' appears for password
      cy.get('#pass-error').should('have.text', 'This is a required field.')
      cy.wait(2000)

    });

    it('test_05_Login_With_Wrong_Password', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      // Click the sign in Link
      cy.get('html > body > div:nth-of-type(2) > header > div:first-of-type > div > ul > li:nth-of-type(2) > a').click()
      // Verify Create Account Page is open
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
      // Set Email
      let firstname = 'abg'
      let lastname = 'jago'
      let email = firstname + lastname + '@gmail.com'
      cy.get('#email').type(email)
      cy.wait(2000)
      // Set Password 
      cy.get('#pass').type('Cek123')
      cy.wait(2000)
      // Click Button Sign in
      cy.get('#send2').click()
      cy.wait(2000)
      // Verify user still on lgin page
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
      cy.wait(2000)
      // Verify text error message appear 
      cy.get('#maincontent > div:nth-of-type(2) > div:nth-of-type(2) > div > div > div').should('have.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
      cy.wait(2000)

    });

    it('test_05_Logout', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      // Click the sign in Link
      cy.get('html > body > div:nth-of-type(2) > header > div:first-of-type > div > ul > li:nth-of-type(2) > a').click()
      // Verify Create Account Page is open
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
       // Set Email
      let firstname = 'abg'
      let lastname = 'jago'
      let email = firstname + lastname + '@gmail.com'
      cy.get('#email').type(email)
      // Set Password 
      cy.get('#pass').type('Semangat45')
      // Click Button Sign in
      cy.get('#send2').click()
      cy.wait(2000)
      // Verify user directed to home page
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/')
      cy.wait(2000)
      // Verify sytem show your name
      cy.get(':nth-child(2) > .greet > .logged-in').should('contain', 'Welcome,' +' ' + firstname + ' ' + lastname + '!');
      // Verify on home show menu Whats' new, Women, Men, Gear, Training, Sale 
      cy.get('#ui-id-3').should('have.text', "What's New")
      cy.get('#ui-id-4').should('have.text', 'Women')
      cy.get('#ui-id-5').should('have.text', 'Men')
      cy.get('#ui-id-6').should('have.text', 'Gear')
      cy.get('#ui-id-7').should('have.text', 'Training')
      cy.get('#ui-id-8').should('have.text', 'Sale')
      cy.wait(5000)

      // Then user want to log out
      // Click Dropdown account
      cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click();
      cy.wait(2000)
      // Click logout
      cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').click();
      cy.wait(2000)
      // Verify logout success
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/logoutSuccess/')
      cy.get('#maincontent > div:first-of-type > h1 > span').should('have.text', 'You are signed out')
      cy.get('#maincontent > div:nth-of-type(3) > div > p').should('have.text', 'You have signed out and will go to our homepage in 5 seconds.')
      cy.get(5000)
      // Verify user directed to home page
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/')
      // Verify on home show menu Whats' new, Women, Men, Gear, Training, Sale 
      cy.get('#ui-id-3').should('have.text', "What's New")
      cy.get('#ui-id-4').should('have.text', 'Women')
      cy.get('#ui-id-5').should('have.text', 'Men')
      cy.get('#ui-id-6').should('have.text', 'Gear')
      cy.get('#ui-id-7').should('have.text', 'Training')
      cy.get('#ui-id-8').should('have.text', 'Sale')
      cy.wait(5000)


    });


});

