import 'cypress-xpath'

describe('Menü Öğelerinin Doğru Çalışması', () => {
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
    
   it('Anasayfa', () => {
        cy.xpath("//a[normalize-space()='Anasayfa']")
        .click()
    });

    it('Fırsat Gurme Paketler', () => {
        cy.wait(3)
        cy.xpath("//a[contains(text(),'FIRSAT Gurme Paketler')]")
        .click()
    });
      
    it('Çok Satanlar', () => {
       cy.get("a:contains('Çok Satanlar')")
       .click({multiple: true});
    });
})