import { login } from "./000_Base_Function.cy";

describe('TC_Edit_Acoount', () => {
    it('test_01_Edit_First_and_Last_name', () => {
        login(); // Call Test Case Login
        // Click Acount drop down
        cy.wait(5000)
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click();
        cy.wait(2000)
        //Click My Account
        cy.get('html > body > div:nth-of-type(2) > header > div:first-of-type > div > ul > li:nth-of-type(2) > div > ul > li:first-of-type > a').click()
        cy.wait(2000)
        //User Directed to Account page
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/')
        cy.wait(2000)
        //User Click Edit
        cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
        cy.wait(2000)
        //User Directed to edit acoount page
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/edit/')
        //Set New Firstname and Last name
        let new_firstname = 'abg' 
        let new_lastname = 'jago'
        cy.get('#firstname').clear()
        cy.get('#lastname').clear()
        cy.get('#firstname').type(new_firstname)
        cy.get('#lastname').type(new_lastname)
        cy.wait(2000)
        //Click Save Button 
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.wait(2000)
        // Verify user name change
        cy.get('.box-content > p').should('contain', new_firstname + ' ' + new_lastname);
        cy.wait(1000)
    });
    it('test_02_Edit_Email', () => {
        login(); // Call Test Case Login
        // Click Acount drop down
        cy.wait(5000)
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click();
        cy.wait(2000)
        //Click My Account
        cy.get('html > body > div:nth-of-type(2) > header > div:first-of-type > div > ul > li:nth-of-type(2) > div > ul > li:first-of-type > a').click()
        cy.wait(2000)
        //User Directed to Account page
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/')
        cy.wait(2000)
        //User Click Edit
        cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
        cy.wait(2000)
        //User Directed to edit acoount page
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/edit/')
        cy.wait(2000)
        //Click checkbox email
        cy.get('#change-email').click()
        cy.wait(2000)
        //Verify content change email appear
        cy.get('#form-validate > fieldset:nth-of-type(2) > legend > span').should('have.text', 'Change Email')
        cy.wait(2000)
        cy.get('#email').should('be.visible');
        cy.get('#current-password').should('be.visible');
        //Set New Email
        let new_email = 'abgjago@gmail.com' 
        let current_password = 'Semangat45'
        cy.get('#email').clear()
        cy.get('#email').type(new_email)
        cy.wait(2000)
        //Set Current password
        cy.get('#current-password').type(current_password)
        cy.wait(2000)
        //Click Save Button 
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.wait(2000)
        // Verify user directed to login page
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/login/')
        cy.wait(1000)
        // Verify Succes edit email
        cy.get('#maincontent > div:nth-of-type(2) > div:nth-of-type(2) > div > div > div').should('have.text', 'You saved the account information.')
        // Login with new email
        cy.get('#email').type(new_email)
        cy.get('#pass').type(current_password)
        cy.wait(1000)
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
        cy.wait(1000)
        // user directed to my account page
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/')
        cy.wait(2000)

    });

    it('test_03_Edit_Password', () => {
        login(); // Call Test Case Login
        // Click Acount drop down
        cy.wait(5000)
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click();
        cy.wait(2000)
        //Click My Account
        cy.get('html > body > div:nth-of-type(2) > header > div:first-of-type > div > ul > li:nth-of-type(2) > div > ul > li:first-of-type > a').click()
        cy.wait(2000)
        //User Directed to Account page
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/')
        cy.wait(2000)
        //User Click Edit
        cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
        cy.wait(2000)
        //User Directed to edit acoount page
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/edit/')
        cy.wait(2000)
        //Click checkbox password
        cy.get('#change-password').click()
        cy.wait(2000)
        //Verify content change email appear
        cy.get('#form-validate > fieldset:nth-of-type(2) > legend > span').should('have.text', 'Change Password')
        cy.wait(2000)
        cy.get('#current-password').should('be.visible')
        cy.get('#password').should('be.visible')
        cy.get('#password-confirmation').should('be.visible')
        //Set New password
        let current_password = 'Semangat45'
        let new_email = 'abgjago@gmail.com' 
        cy.get('#current-password').type(current_password)
        cy.get('#password').type(current_password)
        cy.get('#password-strength-meter-label').should('have.text', 'Strong')
        cy.get('#password-confirmation').type(current_password)
        cy.wait(2000)
        //Click Save Button 
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.wait(2000)
        // Verify user directed to login page
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/login/')
        cy.wait(1000)
        // Verify Succes edit email
        cy.get('#maincontent > div:nth-of-type(2) > div:nth-of-type(2) > div > div > div').should('have.text', 'You saved the account information.')
        // Login with new email
        cy.get('#email').type(new_email)
        cy.get('#pass').type(current_password)
        cy.wait(1000)
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
        cy.wait(1000)
        // user directed to my account page
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/')
        cy.wait(2000)

    });

});