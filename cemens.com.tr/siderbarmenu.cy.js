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
      cy.url().should('eq','https://www.cemens.com.tr/kategori/kayseri-mantisi-1') //Url doğru mu?
      cy.get('div[id="product-list-container"] img').should('be.visible') // Ürünlerin fotoğrafı yükleniyor mu?
   });
   it('Pastırma Sucuk', () => {
      cy.get('[href="/kategori/pastirma-sucuk"]')
      .trigger('mouseover')
      .wait(1000)
      .click()
      .wait(500)
      cy.url().should('eq','https://www.cemens.com.tr/kategori/pastirma-sucuk') 
      cy.get('div[id="product-list-container"] img').should('be.visible') // Ürünlerin fotoğrafı yükleniyor mu?
   });
   it('Pastırma Sucuk > Pastırma', () => {
      cy.get('[href="/kategori/pastirma-sucuk"]')
      .trigger('mouseover')
      .wait(1000)
      cy.get('a[title="Pastırma"] span')
      .click()
      cy.url().should('eq','https://www.cemens.com.tr/kategori/pastirma')
      cy.title().should('contain', 'Pastırma') // Title doğru mu?
   });
   it('Pastırma Sucuk > Sucuk', () => {
      cy.get('[href="/kategori/pastirma-sucuk"]')
      .trigger('mouseover')
      .wait(1000)
      cy.get('a[href="/kategori/sucuk"] span')
      .click()
      cy.title().should('contain', 'Sucuk')
      cy.url().should('eq','https://www.cemens.com.tr/kategori/sucuk')
   });
   it('Et Ürünleri', () => {
      cy.get('.category-level-1 > :nth-child(1) > :nth-child(3) > a > span')   
      .click()
      cy.url().should('eq','https://www.cemens.com.tr/kategori/et-urunleri')
      cy.title().should('contain','Et Ürünleri')
   });
   it('Unlu Mamüller', () => {
      cy.get('[href="/kategori/cemens-unlu-mamuller"] > span')
      .click()
      cy.url().should('eq','https://www.cemens.com.tr/kategori/cemens-unlu-mamuller')
      cy.title().should('contain','Unlu Mamüller')
   });
   it('Unlu Mamüller > Bazlama Katmer', () => {
      cy.get('[href="/kategori/cemens-unlu-mamuller"] > span')
      .trigger('mouseover')
      .wait(1000)
      cy.get('a[href="/kategori/bazlama-katmer"] span')
      .click()
      cy.url().should('contain','bazlama-katmer')
   });
   it('Unlu Mamüller > Çorbalık', () => {
      cy.get('[href="/kategori/cemens-unlu-mamuller"] > span')
      .trigger('mouseover')
      .wait(1000)
      cy.get('a[href="/kategori/corbalik"] span')
      .click()
      cy.url().should('contain','corbalik')
      cy.title().should('contain','Çorbalık')
   });
   it('Unlu Mamüller > Erişte', () => {
      cy.get('[href="/kategori/cemens-unlu-mamuller"] > span')
      .trigger('mouseover')
      .wait(1000)
      cy.get('a[href="/kategori/eriste"] span')
      .click()
      cy.url().should('contain','eriste')
      cy.title().should('contain','Erişte')
   });
   it('Unlu Mamüller > Tatlı & Kurabiye', () => {
    cy.get('[href="/kategori/cemens-unlu-mamuller"] > span')
    .trigger('mouseover')
    .wait(1000)
    cy.get('a[title="Tatlı & Kurabiye"] span')
    .click()
    cy.url().should('contain','tatli-kurabiye')
    cy.title().should('contain','Tatlı & Kurabiye')
   });
   it('Yöresel Kahvaltılık', () => {
    cy.get('a[title="Yöresel Kahvaltılık"] span')
    .click()
    cy.url().should('contain','yoresel')
    cy.title().should('contain','Yöresel Kahvaltılık')
   });
   it('Yöresel Kahvaltılık > Bal Reçel Marmelat ', () => {
    cy.get('a[title="Yöresel Kahvaltılık"] span')
    .trigger('mouseover')
    .wait(1000)
    cy.get('a[href="/kategori/bal-recel-marmelat"] span')
    .click()
    cy.url().should('contain','bal-recel-marmelat')
    cy.title().should('contain','Bal, Reçel & Marmelat')
   });
   it('Yöresel Kahvaltılık > Çay', () => {
    cy.get('a[title="Yöresel Kahvaltılık"] span')
    .trigger('mouseover')
    .wait(1000)
    cy.get('a[href="/kategori/cay"] span')
    .click()
    cy.url().should('contain','cay')
    cy.title().should('contain','Çay')
   });
   it('Yöresel Kahvaltılık > Kahvaltılık Sürmelik', () => {
    cy.get('a[title="Yöresel Kahvaltılık"] span')
    .trigger('mouseover')
    .wait(1000)
    cy.get('a[href="/kategori/kahvaltilik-surmelik"] span')
    .click()
    cy.url().should('contain','kahvaltilik-surmelik')
    cy.title().should('contain','Kahvaltılık')
   });
   it('Yöresel Kahvaltılık > Peynir Zeytin', () => {
    cy.get('a[title="Yöresel Kahvaltılık"] span')
    .trigger('mouseover')
    .wait(1000)
    cy.get('a[title="Peynir & Zeytin"] span')
    .click()
    cy.url().should('contain','peynir')
    cy.title().should('contain','Peynir & Zeytin')
   });
   it('Yöresel Kahvaltılık > Tahin, Pekmez & Helva', () => {
    cy.get('a[title="Yöresel Kahvaltılık"] span')
    .trigger('mouseover')
    .wait(1000)
    cy.get('a[title="Tahin, Pekmez & Helva"] span')
    .click()
    cy.url().should('contain','tahin')
    cy.title().should('contain','Tahin, Pekmez & Helva')
   });
   it('Yöresel Kahvaltılık > Zeytinyağı & Tereyağı', () => {
    cy.get('a[title="Yöresel Kahvaltılık"] span')
    .trigger('mouseover')
    .wait(1000)
    cy.get('a[title="Zeytinyağı & Tereyağı"] span')
    .click()
    cy.url().should('contain','zeytinyagi')
    cy.title().should('contain','Zeytinyağı & Tereyağı')
   });
   it('Konserve & Kuru Gıda', () => {
      cy.get(':nth-child(6) > [href="/kategori/konserve-ve-kuru-gida"] > span')
      .click()
      cy.url().should('contain','konserve')
      cy.title().should('contain','Konserve')
   });
   it('Konserve & Kuru Gıda > Yaprak Sarma', () => {
    cy.get(':nth-child(6) > [href="/kategori/konserve-ve-kuru-gida"] > span')
    .trigger('mouseover')
    .wait(1000)
    cy.get('a[href="/kategori/yaprak-sarma"] span')
    .click()
    cy.url().should('contain','yaprak-sarma')
    cy.title().should('contain','Yaprak Sarma')
   });
   it('Konserve & Kuru Gıda > Konserve Salça Sos', () => {
      cy.get(':nth-child(6) > [href="/kategori/konserve-ve-kuru-gida"] > span')
      .trigger('mouseover')
      .wait(1000)
      cy.get('a[href="/kategori/konserve-salcasos"] span')
      .click()
      cy.url().should('contain','salcasos')
      cy.title().should('contain','Salça')
   });
   it('Konserve & Kuru Gıda > Turşular', () => {
      cy.get(':nth-child(6) > [href="/kategori/konserve-ve-kuru-gida"] > span')
      .trigger('mouseover')
      .wait(1000)
      cy.get('a[href="/kategori/tursular"] span')
      .click()
      cy.url().should('contain','tursular')
      cy.title().should('contain','Turşular')
   });
   it('Konserve & Kuru Gıda > Bakliyat', () => {
    cy.get(':nth-child(6) > [href="/kategori/konserve-ve-kuru-gida"] > span')
    .trigger('mouseover')
    .wait(1000)
    cy.get('a[href="/kategori/bakliyat"] span')
    .click()
    cy.url().should('contain','bakliyat')
    cy.title().should('contain','Bakliyat')
   });
   it('Konserve & Kuru Gıda > Baharatlar', () => {
    cy.get(':nth-child(6) > [href="/kategori/konserve-ve-kuru-gida"] > span')
    .trigger('mouseover')
    .wait(1000)
    cy.contains('span', 'Baharatlar')
    .click()
    cy.url().should('contain','baharatlar')
    cy.title().should('contain','Baharatlar')
   });
   it('Konserve & Kuru Gıda > Kuru Meyve-Sebze', () => {
    cy.get(':nth-child(6) > [href="/kategori/konserve-ve-kuru-gida"] > span')
    .trigger('mouseover')
    .wait(1000)
    cy.contains('span', 'Kuru Meyve-Sebze')
    .click()
    cy.url().should('contain','kuru')
    cy.title().should('contain','Kuru Meyve-Sebze')
   });
   it('Konserve & Kuru Gıda > UN', () => {
    cy.get(':nth-child(6) > [href="/kategori/konserve-ve-kuru-gida"] > span')
    .trigger('mouseover')
    .wait(1000)
    cy.contains('span', 'UN')
    .click()
    cy.url().should('contain','un')
    cy.title().should('contain','UN')
   });
   it('Atıştırmalıklar', () => {
      cy.get('[href="/kategori/atistirmaliklar"] > span')
      .click()
      cy.url().should('contain','atistirmaliklar')
      cy.title().should('contain','Atıştırmalıklar')
   });
   it('Atıştırmalıklar > Kuruyemiş', () => {
      cy.get('[href="/kategori/atistirmaliklar"] > span')
      .trigger('mouseover')
      .wait(1000)
      cy.contains('span', 'Kuruyemiş')
      .click()
      cy.url().should('contain','kuruyemis')
      cy.title().should('contain','Kuruyemiş')
   });
   it('Atıştırmalıklar > Tatlı Atıştırmalık', () => {
    cy.get('[href="/kategori/atistirmaliklar"] > span')
    .trigger('mouseover')
    .wait(1000)
    cy.contains('span', 'Tatlı Atıştırmalık')
    .click()
    cy.url().should('contain','tatli')
    cy.title().should('contain','Tatlı Atıştırmalık')
    });
    it('Yöresinden', () => {
      cy.get('a[href="/kategori/yoresinden"] span')
      .click()
      cy.url().should('contain','yoresinden')
      cy.title().should('contain','Yöresinden')
    });
    it('Yöresinden > Akdeniz', () => {
      cy.get('a[href="/kategori/yoresinden"] span')
      .trigger('mouseover')
      .wait(1000)
      cy.contains('span', 'Akdeniz')
      .click()
      cy.url().should('contain','akdeniz')
      cy.title().should('contain','Akdeniz')
    });
    it('Yöresinden > Doğu Anadolu', () => {
      cy.get('a[href="/kategori/yoresinden"] span')
      .trigger('mouseover')
      .wait(1000)
      cy.contains('span', 'Doğu Anadolu')
      .click()
      cy.url().should('contain','dogu')
      cy.title().should('contain','Doğu Anadolu')
    });
    it('Yöresinden > Ege', () => {
      cy.get('a[href="/kategori/yoresinden"] span')
      .trigger('mouseover')
      .wait(1000)
      cy.contains('span', 'Ege')
      .click()
      cy.url().should('contain','ege')
      cy.title().should('contain','Ege')
    });
    it('Yöresinden > Güneydoğu Anadolu', () => {
      cy.get('a[href="/kategori/yoresinden"] span')
      .trigger('mouseover')
      .wait(1000)
      cy.contains('span', 'Güneydoğu Anadolu')
      .click()
      cy.url().should('contain','guneydogu')
      cy.title().should('contain','Güneydoğu Anadolu')
    });
    it('Yöresinden > İç Anadolu', () => {
      cy.get('a[href="/kategori/yoresinden"] span')
      .trigger('mouseover')
      .wait(1000)
      cy.contains('span', 'İç Anadolu')
      .click()
      cy.url().should('contain','ic')
      cy.title().should('contain','İç Anadolu')
    });
    it('Yöresinden > Karadeniz', () => {
      cy.get('a[href="/kategori/yoresinden"] span')
      .trigger('mouseover')
      .wait(1000)
      cy.contains('span', 'Karadeniz')
      .click()
      cy.url().should('contain','karadeniz')
      cy.title().should('contain','Karadeniz')
    });
    it('Yöresinden > Marmara', () => {
      cy.get('a[href="/kategori/yoresinden"] span')
      .trigger('mouseover')
      .wait(1000)
      cy.contains('span', 'Marmara')
      .click()
      cy.url().should('contain','marmara')
      cy.title().should('contain','Marmara')
    });
    it('Coğrafi İşaretli Ürünler', () => {
      cy.get('a[href="/kategori/cografi-isaretli-urunler"] span')
      .click()
      cy.url().should('contain','cografi')
      cy.title().should('contain','Coğrafi')
    });
    it('Gurme Paketler', () => {
      cy.get('a[href="/kategori/gurme-paketler"] span').eq(2)
      .click()
      cy.url().should('contain','gurme-paketler')
      cy.title().should('contain','Gurme')
    });
});