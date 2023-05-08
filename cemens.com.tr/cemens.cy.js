describe('Cemens.com.tr QA - Arama Kutusu & Title', () => {
    beforeEach(() => {
      cy.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('Script error')) {
          return false;
        }
        
        // Crossorigin hatası almakta. Onu elimine etmek için uncaught exception ekledim.
        return true;
      });
  
      cy.viewport('macbook-16');
      cy.visit('https://www.cemens.com.tr');
      cy.wait(3);
      cy.get('.fancybox-close-small').click(); // Pop Up Kapatma
    });
  
    it('Title Kontrolü', () => {
      cy.title().should('contains', "Çemen's");
    });
  
    it('Arama kutusunun doğru çalışması', () => {
        cy.get("input[placeholder='Ürün veya kategori ara...']")
        .type(
            "Laoreet sit amet cursus sit amet dictum sit. Nunc scelerisque viverra mauris in aliquam sem fringilla. In ante metus dictum at tempor. Est sit amet facilisis magna etiam tempor. Feugiat vivamus at augue eget arcu dictum varius duis. Mi tempus imperdiet nulla malesuada pellentesque elit eget. Duis at consectetur lorem donec massa sapien. Pretium nibh ipsum consequat nisl. Elementum eu facilisis sed odio morbi quis commodo odio aenean. In nibh mauris cursus mattis molestie a. Blandit massa enim nec dui nunc. Cursus turpis massa tincidunt dui ut ornare lectus sit. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Nisl nunc mi ipsum faucibus vitae aliquet. Eget sit amet tellus cras adipiscing enim. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Semper feugiat nibh sed pulvinar proin gravida. Pretium fusce id velit ut tortor pretium viverra suspendisse potenti. Sit amet massa vitae tortor."
        ) // 988 karakter.
        .type("{Enter}")
        cy.get("input[placeholder='Ürün veya kategori ara...']")
        .type("Pratik Yağlama Paketi")
        .type("{Enter}")
        cy.get("input[placeholder='Ürün veya kategori ara...']")
        .type("Pratik Yaglama Paketi") // ğ yerine g ile denemek istedim.
        .type("{Enter}")
    });
  });
  