describe('Cemens.com.tr QA - Menü Sidebar Öğeleri', () => {
    beforeEach(() => {
      cy.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('Script error')) {
          return false;
        }
        
        // Crossorigin hatası almakta. Onu elimine etmek için uncaught exception ekledim.
        return true;
      });
  
      cy.viewport('macbook-16');
      cy.visit('https://www.cemens.com.tr/kategori/gurme-paketler');
      cy.wait(1);
    });      
   it('Kayseri Mantısı', () => {
      cy.get('.category-level-1 > :nth-child(1) > :nth-child(1) > a > span')
      .click()
   });
   it('Pastırma Sucuk', () => {
      cy.get('[href="/kategori/pastirma-sucuk"]')
      .trigger('mouseover')
      .wait(1000)
      .click()
   });
   it('Pastırma Sucuk > Pastırma', () => {
      cy.get('[href="/kategori/pastirma-sucuk"]')
      .trigger('mouseover')
      .wait(1000)
      cy.get('a[title="Pastırma"] span')
      .click()
   });
   it('Pastırma Sucuk > Sucuk', () => {
      cy.get('[href="/kategori/pastirma-sucuk"]')
      .trigger('mouseover')
      .wait(1000)
      cy.get('a[href="/kategori/sucuk"] span')
      .click()
   });
   it('Et Ürünleri', () => {
      cy.get('.category-level-1 > :nth-child(1) > :nth-child(3) > a > span')   
      .click()
   });
   it('Unlu Mamüller', () => {
      cy.get('[href="/kategori/cemens-unlu-mamuller"] > span')
      .click()
   });
   it('Unlu Mamüller > Bazlama Katmer', () => {
      cy.get('[href="/kategori/cemens-unlu-mamuller"] > span')
      .trigger('mouseover')
      .wait(1000)
      cy.get('a[href="/kategori/bazlama-katmer"] span')
      .click()
   });
   it('Unlu Mamüller > Çorbalık', () => {
      cy.get('[href="/kategori/cemens-unlu-mamuller"] > span')
      .trigger('mouseover')
      .wait(1000)
      cy.get('a[href="/kategori/corbalik"] span')
      .click()
   });
   it('Unlu Mamüller > Erişte', () => {
      cy.get('[href="/kategori/cemens-unlu-mamuller"] > span')
      .trigger('mouseover')
      .wait(1000)
      cy.get('a[href="/kategori/eriste"] span')
      .click()
   });
   it('Unlu Mamüller > Tatlı & Kurabiye', () => {
    cy.get('[href="/kategori/cemens-unlu-mamuller"] > span')
    .trigger('mouseover')
    .wait(1000)
    cy.get('a[title="Tatlı & Kurabiye"] span')
    .click()
   });
   it('Yöresel Kahvaltılık', () => {
    cy.get('a[title="Yöresel Kahvaltılık"] span')
    .click()
   });
   it('Yöresel Kahvaltılık > Bal Reçel Marmelat ', () => {
    cy.get('a[title="Yöresel Kahvaltılık"] span')
    .trigger('mouseover')
    .wait(1000)
    cy.get('a[href="/kategori/bal-recel-marmelat"] span')
    .click()
   });
   it('Yöresel Kahvaltılık > Çay', () => {
    cy.get('a[title="Yöresel Kahvaltılık"] span')
    .trigger('mouseover')
    .wait(1000)
    cy.get('a[href="/kategori/cay"] span')
    .click()
   });
   it('Yöresel Kahvaltılık > Kahvaltılık Sürmelik', () => {
    cy.get('a[title="Yöresel Kahvaltılık"] span')
    .trigger('mouseover')
    .wait(1000)
    cy.get('a[href="/kategori/kahvaltilik-surmelik"] span')
    .click()
   });
   it('Yöresel Kahvaltılık > Peynir Zeytin', () => {
    cy.get('a[title="Yöresel Kahvaltılık"] span')
    .trigger('mouseover')
    .wait(1000)
    cy.get('a[title="Peynir & Zeytin"] span')
    .click()
   });
   it('Yöresel Kahvaltılık > Tahin, Pekmez & Helva', () => {
    cy.get('a[title="Yöresel Kahvaltılık"] span')
    .trigger('mouseover')
    .wait(1000)
    cy.get('a[title="Tahin, Pekmez & Helva"] span')
    .click()
   });
   it('Yöresel Kahvaltılık > Zeytinyağı & Tereyağı', () => {
    cy.get('a[title="Yöresel Kahvaltılık"] span')
    .trigger('mouseover')
    .wait(1000)
    cy.get('a[title="Zeytinyağı & Tereyağı"] span')
    .click()
   });
   it('Konserve & Kuru Gıda', () => {
      cy.get(':nth-child(6) > [href="/kategori/konserve-ve-kuru-gida"] > span')
      .click()
   });
   it('Konserve & Kuru Gıda > Yaprak Sarma', () => {
    cy.get(':nth-child(6) > [href="/kategori/konserve-ve-kuru-gida"] > span')
    .trigger('mouseover')
    .wait(1000)
    cy.get('a[href="/kategori/yaprak-sarma"] span')
    .click()
   });
   it('Konserve & Kuru Gıda > Konserve Salça Sos', () => {
      cy.get(':nth-child(6) > [href="/kategori/konserve-ve-kuru-gida"] > span')
      .trigger('mouseover')
      .wait(1000)
      cy.get('a[href="/kategori/konserve-salcasos"] span')
      .click()
   });
   it('Konserve & Kuru Gıda > Turşular', () => {
      cy.get(':nth-child(6) > [href="/kategori/konserve-ve-kuru-gida"] > span')
      .trigger('mouseover')
      .wait(1000)
      cy.get('a[href="/kategori/tursular"] span')
      .click()
   });
   it('Konserve & Kuru Gıda > Bakliyat', () => {
    cy.get(':nth-child(6) > [href="/kategori/konserve-ve-kuru-gida"] > span')
    .trigger('mouseover')
    .wait(1000)
    cy.get('a[href="/kategori/bakliyat"] span')
    .click()
   });
   it('Konserve & Kuru Gıda > Baharatlar', () => {
    cy.get(':nth-child(6) > [href="/kategori/konserve-ve-kuru-gida"] > span')
    .trigger('mouseover')
    .wait(1000)
    cy.contains('span', 'Baharatlar')
    .click()
   });
   it('Konserve & Kuru Gıda > Kuru Meyve-Sebze', () => {
    cy.get(':nth-child(6) > [href="/kategori/konserve-ve-kuru-gida"] > span')
    .trigger('mouseover')
    .wait(1000)
    cy.contains('span', 'Kuru Meyve-Sebze')
    .click()
   });
   it('Konserve & Kuru Gıda > UN', () => {
    cy.get(':nth-child(6) > [href="/kategori/konserve-ve-kuru-gida"] > span')
    .trigger('mouseover')
    .wait(1000)
    cy.contains('span', 'UN')
    .click()
   });
   it('Atıştırmalıklar', () => {
      cy.get('[href="/kategori/atistirmaliklar"] > span')
      .click()
   });
   it('Atıştırmalıklar > Kuruyemiş', () => {
      cy.get('[href="/kategori/atistirmaliklar"] > span')
      .trigger('mouseover')
      .wait(1000)
      cy.contains('span', 'Kuruyemiş')
      .click()
   });
   it('Atıştırmalıklar > Tatlı Atıştırmalık', () => {
    cy.get('[href="/kategori/atistirmaliklar"] > span')
    .trigger('mouseover')
    .wait(1000)
    cy.contains('span', 'Tatlı Atıştırmalık')
    .click()
    });
    it('Yöresinden', () => {
      cy.get('a[href="/kategori/yoresinden"] span')
      .click()
    });
    it('Yöresinden > Akdeniz', () => {
      cy.get('a[href="/kategori/yoresinden"] span')
      .trigger('mouseover')
      .wait(1000)
      cy.contains('span', 'Akdeniz')
      .click()
    });
    it('Yöresinden > Doğu Anadolu', () => {
      cy.get('a[href="/kategori/yoresinden"] span')
      .trigger('mouseover')
      .wait(1000)
      cy.contains('span', 'Doğu Anadolu')
      .click()
    });
    it('Yöresinden > Ege', () => {
      cy.get('a[href="/kategori/yoresinden"] span')
      .trigger('mouseover')
      .wait(1000)
      cy.contains('span', 'Ege')
      .click()
    });
    it('Yöresinden > Güneydoğu Anadolu', () => {
      cy.get('a[href="/kategori/yoresinden"] span')
      .trigger('mouseover')
      .wait(1000)
      cy.contains('span', 'Güneydoğu Anadolu')
      .click()
    });
    it('Yöresinden > İç Anadolu', () => {
      cy.get('a[href="/kategori/yoresinden"] span')
      .trigger('mouseover')
      .wait(1000)
      cy.contains('span', 'İç Anadolu')
      .click()
    });
    it('Yöresinden > Karadeniz', () => {
      cy.get('a[href="/kategori/yoresinden"] span')
      .trigger('mouseover')
      .wait(1000)
      cy.contains('span', 'Karadeniz')
      .click()
    });
    it('Yöresinden > Marmara', () => {
      cy.get('a[href="/kategori/yoresinden"] span')
      .trigger('mouseover')
      .wait(1000)
      cy.contains('span', 'Marmara')
      .click()
    });
    it('Coğrafi İşaretli Ürünler', () => {
      cy.get('a[href="/kategori/cografi-isaretli-urunler"] span')
      .click()
    });
    it('Gurme Paketler', () => {
      cy.get('a[href="/kategori/gurme-paketler"] span').eq(2)
      .click()
    });
});