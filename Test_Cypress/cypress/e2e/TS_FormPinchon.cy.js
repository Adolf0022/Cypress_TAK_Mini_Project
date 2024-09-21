
describe('Testing_Form', () => {
  it('test_01_Send_Form_With_Valid_Data_Individu', () => {
    cy.visit('https://docs.google.com/forms/d/e/1FAIpQLSd8kxrEBU0sgJujV7eYAO6exg_DX8MBOtrR-SkRBOhtM72Rjw/viewform')

    // Fill in the email field
    cy.get(':nth-child(1) > [jsmodel="CP1oW"] > .geS5n > .AgroKb > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd').type('kikir@gmail.com');
    
    // Click on a checkbox or radio button individu
    cy.get('#i9 > .vd3tt > .AB7Lab').click();
    
    // Fill in jumlah penggunan aplikasi 
    cy.get(':nth-child(3) > [jsmodel="CP1oW"] > .geS5n > .AgroKb > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd').type('2');
    
    // Fill in kapan aplikasi didirikan
    cy.get('#mG61Hd > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(4) > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div:first-of-type > div > div:first-of-type > input').type('2023-06-22');
    
    // Click button kirim
    cy.get('#mG61Hd > div:nth-of-type(2) > div > div:nth-of-type(3) > div:first-of-type > div:first-of-type > div > span').click()

    // Verify succes sent form
    cy.get('.vHW8K').should('have.text', 'Jawaban Anda telah direkam.');

  });

  it('test_02_Send_Form_With_Valid_Data_Koperasi', () => {
    cy.visit('https://docs.google.com/forms/d/e/1FAIpQLSd8kxrEBU0sgJujV7eYAO6exg_DX8MBOtrR-SkRBOhtM72Rjw/viewform')

    // Fill in the Applicaton Name field
    cy.get(':nth-child(1) > [jsmodel="CP1oW"] > .geS5n > .AgroKb > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd').type('Bank Digital Keliling');
    
    // Click on a checkbox or radio button koperasi
    cy.get('#i12 > div:nth-of-type(3) > div').click();
    
    // Fill in jumlah penggunan aplikasi 
    cy.get(':nth-child(3) > [jsmodel="CP1oW"] > .geS5n > .AgroKb > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd').type('2');
    
    // Fill in kapan aplikasi didirikan
    cy.get('#mG61Hd > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(4) > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div:first-of-type > div > div:first-of-type > input').type('2023-06-22');
    
    // Click button kirim
    cy.get('#mG61Hd > div:nth-of-type(2) > div > div:nth-of-type(3) > div:first-of-type > div:first-of-type > div > span').click()

    // Verify succes sent form
    cy.get('.vHW8K').should('have.text', 'Jawaban Anda telah direkam.');

  });


  it('test_03_Send_Form_Without_Application Nam', () => {
    cy.visit('https://docs.google.com/forms/d/e/1FAIpQLSd8kxrEBU0sgJujV7eYAO6exg_DX8MBOtrR-SkRBOhtM72Rjw/viewform')

    // Click on a checkbox or radio button koperasi
    cy.get('#i12 > div:nth-of-type(3) > div').click();
    
    // Fill in jumlah penggunan aplikasi 
    cy.get(':nth-child(3) > [jsmodel="CP1oW"] > .geS5n > .AgroKb > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd').type('2');
    
    // Fill in kapan aplikasi didirikan
    cy.get('#mG61Hd > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(4) > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div:first-of-type > div > div:first-of-type > input').type('2023-06-22');
    
    // Click button kirim
    cy.get('#mG61Hd > div:nth-of-type(2) > div > div:nth-of-type(3) > div:first-of-type > div:first-of-type > div > span').click()

    // Verify succes sent form
    cy.get('.vHW8K').should('have.text', 'Jawaban Anda telah direkam.');

  });

  it('test_04_Send_Form_Without_Select_Jenis_Pengguna', () => {
    cy.visit('https://docs.google.com/forms/d/e/1FAIpQLSd8kxrEBU0sgJujV7eYAO6exg_DX8MBOtrR-SkRBOhtM72Rjw/viewform')

    // Fill in the Applicaton Name field
    cy.get(':nth-child(1) > [jsmodel="CP1oW"] > .geS5n > .AgroKb > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd').type('Bank Digital Keliling');
    
    // Fill in jumlah penggunan aplikasi 
    cy.get(':nth-child(3) > [jsmodel="CP1oW"] > .geS5n > .AgroKb > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd').type('2');
    
    // Fill in kapan aplikasi didirikan
    cy.get('#mG61Hd > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(4) > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div:first-of-type > div > div:first-of-type > input').type('2023-06-22');
    
    // Click button kirim
    cy.get('#mG61Hd > div:nth-of-type(2) > div > div:nth-of-type(3) > div:first-of-type > div:first-of-type > div > span').click()

    // Verify succes sent form
    cy.get('.vHW8K').should('have.text', 'Jawaban Anda telah direkam.');

  });

  it('test_05_Send_Form_Without_Jumlah_Aplikasi', () => {
    cy.visit('https://docs.google.com/forms/d/e/1FAIpQLSd8kxrEBU0sgJujV7eYAO6exg_DX8MBOtrR-SkRBOhtM72Rjw/viewform')

    // Fill in the Applicaton Name field
    cy.get(':nth-child(1) > [jsmodel="CP1oW"] > .geS5n > .AgroKb > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd').type('Bank Digital Keliling');
    
    // Click on a checkbox or radio button individu
    cy.get('#i9 > .vd3tt > .AB7Lab').click();
  
    // Fill in kapan aplikasi didirikan
    cy.get('#mG61Hd > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(4) > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div:first-of-type > div > div:first-of-type > input').type('2023-06-22');
    
    // Click button kirim
    cy.get('#mG61Hd > div:nth-of-type(2) > div > div:nth-of-type(3) > div:first-of-type > div:first-of-type > div > span').click()

    // Verify succes sent form
    cy.get('.vHW8K').should('have.text', 'Jawaban Anda telah direkam.');

  });

  it('test_06_Send_Form_Without_Set_date', () => {
    cy.visit('https://docs.google.com/forms/d/e/1FAIpQLSd8kxrEBU0sgJujV7eYAO6exg_DX8MBOtrR-SkRBOhtM72Rjw/viewform')

    // Fill in the Applicaton Name field
    cy.get(':nth-child(1) > [jsmodel="CP1oW"] > .geS5n > .AgroKb > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd').type('Bank Digital Keliling');
    
    // Click on a checkbox or radio button individu
    cy.get('#i9 > .vd3tt > .AB7Lab').click();
    
    // Fill in jumlah penggunan aplikasi 
    cy.get(':nth-child(3) > [jsmodel="CP1oW"] > .geS5n > .AgroKb > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd').type('2');
    
    // Click button kirim
    cy.get('#mG61Hd > div:nth-of-type(2) > div > div:nth-of-type(3) > div:first-of-type > div:first-of-type > div > span').click()

    // Verify succes sent form
    cy.get('.vHW8K').should('have.text', 'Jawaban Anda telah direkam.');

  });

  it('test_07_User_Set_Char_On_Jumlah_Aplikasi_textbox', () => {
    cy.visit('https://docs.google.com/forms/d/e/1FAIpQLSd8kxrEBU0sgJujV7eYAO6exg_DX8MBOtrR-SkRBOhtM72Rjw/viewform')

    // Fill in the Applicaton Name field
    cy.get(':nth-child(1) > [jsmodel="CP1oW"] > .geS5n > .AgroKb > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd').type('Bank Digital Keliling');
    
    // Click on a checkbox or radio button individu
    cy.get('#i9 > .vd3tt > .AB7Lab').click();
    
    // Fill in jumlah penggunan aplikasi 
    cy.get(':nth-child(3) > [jsmodel="CP1oW"] > .geS5n > .AgroKb > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd').type('ABCD');
    
    // Fill in kapan aplikasi didirikan
    cy.get('#mG61Hd > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(4) > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div:first-of-type > div > div:first-of-type > input').type('2023-06-22');
    
    // Click button kirim
    cy.get('#mG61Hd > div:nth-of-type(2) > div > div:nth-of-type(3) > div:first-of-type > div:first-of-type > div > span').click()

    // Verify succes sent form
    cy.get('.vHW8K').should('have.text', 'Jawaban Anda telah direkam.');

  });
  
});
