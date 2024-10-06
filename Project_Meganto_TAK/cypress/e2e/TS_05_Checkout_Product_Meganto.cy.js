import { login } from "./000_Base_Function.cy";
import { add_to_cart } from "./000_Base_Function.cy";

describe('TC_Checkout_Product_with_Flat Rate', () => {
    it('test_01_CO_Product', () => {
    login() // Call Test Case Login
    add_to_cart() // Call Test Case Add to Cart
    
    //Click Button Proceeed to CO
    cy.get('#maincontent > div:nth-of-type(3) > div > div:nth-of-type(2) > div:first-of-type > ul > li:first-of-type > button').click()
    cy.wait(2000)

    // Verify User Directed to Shiiping page
    cy.url().should('eq', 'https://magento.softwaretestingboard.com/checkout/#shipping')
    // Verify user have exisiting adress or not
    cy.get('[name="firstname"]').then(($existing_address) => {
    if ($existing_address.is(':visible')) {
    // fill data 
    let first = 'abg'
    let lastname = 'jago'
    let company ='PT. Bank Keliling'
    let Strett = 'Jalan Pemuda No.24 C'
    let subdistrict = 'Sidikalang'
    let region = 'Dairi'
    let city = 'Los Angels'
    let state = 'California'
    let postalcode = '90001'
    let phone_number = '081399990000'
    cy.get('[name="firstname"]').clear()
    cy.get('[name="firstname"]').type(first)
    cy.get('[name="lastname"]').clear()
    cy.get('[name="lastname"]').type(lastname)
    cy.get('[name="company"]').type(company)
    cy.get('[name="street[0]"]').type(Strett)
    cy.get('[name="street[1]"]').type(subdistrict)
    cy.get('[name="street[2]"]').type(region)
    cy.get('[name="city"]').type(city)
    cy.get('[name="postcode"]').type(postalcode)
    cy.get('[name="country_id"]').select('AS')
    cy.get('[name="telephone"]').type(phone_number)

    } else {}
    
    // cek product price
    cy.get('#opc-sidebar > div:first-of-type > div > div:first-of-type').click()
    cy.wait(2000)
    cy.get('#opc-sidebar > div:first-of-type > div > div:nth-of-type(2) > div > ol > li > div > div > div:first-of-type > div:nth-of-type(2) > span > span > span')
        .invoke('text')
        .then((product_Price) => {
        let productPrice = parseFloat(product_Price.replace('$', '').trim()) // Simpan harga produk
    cy.log('Product price: ' + product_Price)
    // Select Shipping methods
    cy.get('#checkout-shipping-method-load > table > tbody > tr > td:nth-of-type(2) > span > span').click()
    cy.wait(2000)
    // get price product and shipping price 
    cy.get('#checkout-shipping-method-load > table > tbody > tr > td:nth-of-type(2) > span > span')
        .invoke('text')
        .then((shipping_price) => {
        let shippingPrice = parseFloat(shipping_price.replace('$', '').trim()) // Simpan harga shipping
    cy.log('Product Price: ' + shipping_price)
    cy.wait(2000)
    //click button next 
    cy.get('.button > span').click()
    cy.wait(2000)
    // user directed to payment page
    cy.url().should('eq', 'https://magento.softwaretestingboard.com/checkout/#payment')
    // verify the data is correct 
    cy.get('.billing-address-details').should('have.text',"\n     abg \n    jago \n    Jalan Pemuda No.24 C, Sidikalang, Dairi\n    Los Angels,  90001\n    American Samoa\n    081399990000\n\n    \n\n    \n        Edit\n    \n")
    // Verifikasi order total 
    let expectedTotalPrice = productPrice + shippingPrice
    cy.get('#opc-sidebar > div:first-of-type > table > tbody > tr:nth-of-type(3) > td > strong > span') 
          .invoke('text')
          .then((total_price) => {
            const actualTotalPrice = parseFloat(total_price.replace('$', '').trim())
            expect(actualTotalPrice).to.eq(expectedTotalPrice); // Pastikan total harga sesuai
            cy.log('Total price validated successfully')
    // Click Button place order
    cy.get('[title="Place Order"]').click()
    cy.wait(2000)
    // Verify success checkout
    cy.url().should('eq', 'https://magento.softwaretestingboard.com/checkout/onepage/success/')
    cy.get('#maincontent > div:first-of-type > h1 > span').should('have.text','Thank you for your purchase!')

    cy.wait(2000)
    
                });
            });
        });
    });
    });
});