import { login } from "./000_Base_Function.cy";

describe('TC_Add_Product_To_Cart', () => {
    it('test_01_Add_Women_Jacket', () => {
        login(); // Call Test Case Login
        // Click Account drop down
        cy.get('#ui-id-4').trigger('mouseover')
        cy.wait(2000)
        cy.get('#ui-id-9').trigger('mouseover')
        cy.wait(2000)
        cy.get('#ui-id-11').click()
        cy.wait(2000)
        // User directed to the women's jacket product page
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html')
        cy.get('#page-title-heading > span').should('have.text', 'Jackets')
        cy.wait(2000)
        // Get Product Name and Product Price
        cy.get('#maincontent > div:nth-of-type(3) > div:first-of-type > div:nth-of-type(3) > ol > li:nth-of-type(2) > div > div > strong > a')
          .invoke('text')
          .then((product_1) => {
            product_1 = product_1.trim(); // Simpan nama produk
            cy.get('#product-price-1380 > span')
              .invoke('text')
              .then((price_1) => {
                price_1 = price_1.trim(); // Simpan harga produk
                cy.log('Product Name: ' + product_1)
                cy.log('Product Price: ' + price_1)
                // Klik produk setelah mendapatkan nama dan harga
                cy.get('#maincontent > div:nth-of-type(3) > div:first-of-type > div:nth-of-type(3) > ol > li:nth-of-type(2) > div > div > strong > a').click()
                cy.wait(2000)
                // Verifikasi bahwa produk yang dipilih benar
                cy.get('#maincontent > div:nth-of-type(2) > div > div:first-of-type > div:first-of-type > h1 > span')
                  .should('have.text', product_1)
                cy.get('#product-price-1380 > span')
                  .should('have.text', price_1)
            //Select Size and Color 
            cy.get('#option-label-size-143-item-167').click()
            cy.wait(2000)
            cy.get('[aria-label="Green"]').click()
            cy.wait(2000)
            // Set Quantity 
            cy.get('#qty').clear()
            cy.get('#qty').type('1')
            // verifikasi jika tidak ada product di cart
            cy.get('.showcart > .counter').then(($count_cart) => {
                if ($count_cart.is(':visible')) {
                    cy.get('.showcart > .counter').click()
                    cy.wait(1000)
                    cy.get('.product-item-details > .actions > .secondary > .action').click()
                    cy.wait(1000)
                    cy.get('.action-primary').click()
                    cy.wait(1000)
                } else {}
                 // Click Add To Cart 
                 cy.get('#product-addtocart-button').click()
                 cy.wait(2000)
                  //Verify message 'You added Juno Jacket to your shopping cart.'
                 cy.scrollTo('top')
                 cy.wait(2000)
                 cy.get('.message-success > div').should('have.text', "\nYou added" + ' ' + product_1 + ' ' + 'to your' + ' ' + 'shopping cart.' )
                 cy.wait(2000)
                 //Click Shooping cart link
                 cy.get('.message-success > div > a').click()
                 cy.wait(1000)
                 // Verify user directed to cart page
                 cy.url().should('eq', 'https://magento.softwaretestingboard.com/checkout/cart/')
                 //verify the product is on cart
                 cy.get('#shopping-cart-table > tbody > tr.item-info > td.col.item > div > strong > a').should('have.text', product_1)
                 cy.get('#shopping-cart-table > tbody > tr.item-info > td.col.price > span > span > span').should('have.text', price_1)

                });
             });
        });
    });
    it('test_02_Add_Women_Jacket_without_Select_the_size', () => {
        login(); // Call Test Case Login
        // Click Account drop down
        cy.get('#ui-id-4').trigger('mouseover')
        cy.wait(2000)
        cy.get('#ui-id-9').trigger('mouseover')
        cy.wait(2000)
        cy.get('#ui-id-11').click()
        cy.wait(2000)
        // User directed to the women's jacket product page
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html')
        cy.get('#page-title-heading > span').should('have.text', 'Jackets')
        cy.wait(2000)
        // Get Product Name and Product Price
        cy.get('#maincontent > div:nth-of-type(3) > div:first-of-type > div:nth-of-type(3) > ol > li:nth-of-type(2) > div > div > strong > a')
            .invoke('text')
            .then((product_1) => {
        product_1 = product_1.trim(); // Simpan nama produk
        cy.get('#product-price-1380 > span')
          .invoke('text')
          .then((price_1) => {
            price_1 = price_1.trim(); // Simpan harga produk
            cy.log('Product Name: ' + product_1)
            cy.log('Product Price: ' + price_1)
            // Klik produk setelah mendapatkan nama dan harga
            cy.get('#maincontent > div:nth-of-type(3) > div:first-of-type > div:nth-of-type(3) > ol > li:nth-of-type(2) > div > div > strong > a').click()
            cy.wait(2000)
            // Verifikasi bahwa produk yang dipilih benar
            cy.get('#maincontent > div:nth-of-type(2) > div > div:first-of-type > div:first-of-type > h1 > span')
              .should('have.text', product_1)
            cy.get('#product-price-1380 > span')
              .should('have.text', price_1)
              cy.wait(2000)
            //Just Select the color
            cy.scrollTo('center')
            cy.get('[aria-label="Green"]').click()
            cy.wait(2000)
            // Set Quantity 
            cy.get('#qty').clear()
            cy.get('#qty').type('1')
            // Click Add To Cart 
            cy.get('#product-addtocart-button').click()
            cy.wait(2000)
            // Verify error 'This is a required field.' For size
            cy.get('html > body > div:nth-of-type(2) > main > div:nth-of-type(2) > div > div:first-of-type > div:nth-of-type(4) > form > div:first-of-type > div > div > div:first-of-type > div:nth-of-type(2)')
            .should('have.text', 'This is a required field.' )
            cy.wait(2000)
        
          });
      });

    });
    it('test_03_Add_Women_Jacket_without_Select_the_color', () => {
        login(); // Call Test Case Login
        // Click Account drop down
        cy.get('#ui-id-4').trigger('mouseover')
        cy.wait(2000)
        cy.get('#ui-id-9').trigger('mouseover')
        cy.wait(2000)
        cy.get('#ui-id-11').click()
        cy.wait(2000)
        // User directed to the women's jacket product page
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html')
        cy.get('#page-title-heading > span').should('have.text', 'Jackets')
        cy.wait(2000)
        // Get Product Name and Product Price
        cy.get('#maincontent > div:nth-of-type(3) > div:first-of-type > div:nth-of-type(3) > ol > li:nth-of-type(2) > div > div > strong > a')
            .invoke('text')
            .then((product_1) => {
        product_1 = product_1.trim(); // Simpan nama produk
        cy.get('#product-price-1380 > span')
            .invoke('text')
            .then((price_1) => {
        price_1 = price_1.trim(); // Simpan harga produk
        cy.log('Product Name: ' + product_1)
        cy.log('Product Price: ' + price_1)
        // Klik produk setelah mendapatkan nama dan harga
        cy.get('#maincontent > div:nth-of-type(3) > div:first-of-type > div:nth-of-type(3) > ol > li:nth-of-type(2) > div > div > strong > a').click()
        cy.wait(2000)
        // Verifikasi bahwa produk yang dipilih benar
        cy.get('#maincontent > div:nth-of-type(2) > div > div:first-of-type > div:first-of-type > h1 > span')
          .should('have.text', product_1)
        cy.get('#product-price-1380 > span')
          .should('have.text', price_1)
          cy.wait(2000)
        //Just Select the size
        cy.get('#option-label-size-143-item-167').click()
        cy.wait(2000)
        // Set Quantity 
        cy.get('#qty').clear()
        cy.get('#qty').type('1')
        // Click Add To Cart 
        cy.get('#product-addtocart-button').click()
        cy.wait(2000)
        cy.scrollTo('center')
        cy.wait(2000)
        // Verify error 'This is a required field.' For color
        cy.get('html > body > div:nth-of-type(2) > main > div:nth-of-type(2) > div > div:first-of-type > div:nth-of-type(4) > form > div:first-of-type > div > div > div:nth-of-type(2) > div:nth-of-type(2)')
        .should('have.text', 'This is a required field.' )
        cy.wait(2000)
    
      });
  });

});

it('test_04_Add_Women_Jacket_without_Select_the_quantity', () => {
    login(); // Call Test Case Login
    // Click Account drop down
    cy.get('#ui-id-4').trigger('mouseover')
    cy.wait(2000)
    cy.get('#ui-id-9').trigger('mouseover')
    cy.wait(2000)
    cy.get('#ui-id-11').click()
    cy.wait(2000)
    // User directed to the women's jacket product page
     cy.url().should('eq', 'https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html')
    cy.get('#page-title-heading > span').should('have.text', 'Jackets')
    cy.wait(2000)
    // Get Product Name and Product Price
    cy.get('#maincontent > div:nth-of-type(3) > div:first-of-type > div:nth-of-type(3) > ol > li:nth-of-type(2) > div > div > strong > a')
        .invoke('text')
        .then((product_1) => {
    product_1 = product_1.trim(); // Simpan nama produk
    cy.get('#product-price-1380 > span')
        .invoke('text')
        .then((price_1) => {
    price_1 = price_1.trim(); // Simpan harga produk
    cy.log('Product Name: ' + product_1)
    cy.log('Product Price: ' + price_1)
    // Klik produk setelah mendapatkan nama dan harga
    cy.get('#maincontent > div:nth-of-type(3) > div:first-of-type > div:nth-of-type(3) > ol > li:nth-of-type(2) > div > div > strong > a').click()
    cy.wait(2000)
    // Verifikasi bahwa produk yang dipilih benar
    cy.get('#maincontent > div:nth-of-type(2) > div > div:first-of-type > div:first-of-type > h1 > span')
        .should('have.text', product_1)
    cy.get('#product-price-1380 > span')
        .should('have.text', price_1)
    cy.wait(2000)
    //Select Size and Color 
    cy.get('#option-label-size-143-item-167').click()
    cy.wait(2000)
    cy.get('[aria-label="Green"]').click()
    cy.wait(2000)
    // Set Quantity 
    cy.get('#qty').clear()
    // Click Add To Cart 
    cy.get('#product-addtocart-button').click()
    cy.wait(2000)
    cy.scrollTo('center')
    cy.wait(2000)
    // Verify error 'This is a required field.' For color
    cy.get('#qty-error').should('have.text', 'Please enter a valid number in this field.' )
    cy.wait(2000)

    });
});
});
it('test_05_Add_Women_Jacket_without_Select_the_size_color_quantity', () => {
    login(); // Call Test Case Login
    // Click Account drop down
    cy.get('#ui-id-4').trigger('mouseover')
    cy.wait(2000)
    cy.get('#ui-id-9').trigger('mouseover')
    cy.wait(2000)
    cy.get('#ui-id-11').click()
    cy.wait(2000)
    // User directed to the women's jacket product page
    cy.url().should('eq', 'https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html')
    cy.get('#page-title-heading > span').should('have.text', 'Jackets')
    cy.wait(2000)
    // Get Product Name and Product Price
    cy.get('#maincontent > div:nth-of-type(3) > div:first-of-type > div:nth-of-type(3) > ol > li:nth-of-type(2) > div > div > strong > a')
        .invoke('text')
        .then((product_1) => {
        product_1 = product_1.trim(); // Simpan nama produk
    cy.get('#product-price-1380 > span')
        .invoke('text')
        .then((price_1) => {
        price_1 = price_1.trim(); // Simpan harga produk
        cy.log('Product Name: ' + product_1)
        cy.log('Product Price: ' + price_1)
    // Klik produk setelah mendapatkan nama dan harga
    cy.get('#maincontent > div:nth-of-type(3) > div:first-of-type > div:nth-of-type(3) > ol > li:nth-of-type(2) > div > div > strong > a').click()
    cy.wait(2000)
    // Verifikasi bahwa produk yang dipilih benar
    cy.get('#maincontent > div:nth-of-type(2) > div > div:first-of-type > div:first-of-type > h1 > span')
        .should('have.text', product_1)
        cy.get('#product-price-1380 > span')
        .should('have.text', price_1)
    //not set size color and quantity
    cy.get('#qty').clear()
    cy.wait(1000)
    // Click Add To Cart 
    cy.get('#product-addtocart-button').click()
    cy.wait(2000)
    cy.scrollTo('center')
    cy.wait(2000)
    //Verify message 'This is a required field.' appear
    cy.get('html > body > div:nth-of-type(2) > main > div:nth-of-type(2) > div > div:first-of-type > div:nth-of-type(4) > form > div:first-of-type > div > div > div:first-of-type > div:nth-of-type(2)')
    .should('have.text', 'This is a required field.' )
    cy.wait(1000)
    cy.get('html > body > div:nth-of-type(2) > main > div:nth-of-type(2) > div > div:first-of-type > div:nth-of-type(4) > form > div:first-of-type > div > div > div:nth-of-type(2) > div:nth-of-type(2)')
    .should('have.text', 'This is a required field.' )
    cy.wait(1000)
    cy.get('#qty-error').should('have.text', 'Please enter a valid number in this field.' )
    cy.wait(1000)
    
      });
  });
});
    
});
    



    




