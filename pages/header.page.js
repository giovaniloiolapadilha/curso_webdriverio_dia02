import { $ } from '@wdio/globals'

export class HeaderPage {
   inpSearch = $('[id="woocommerce-product-search-field-0"]');
   btnMenuBlog = $('a=Blog');
   btnMenuPromotions = $('a=Promotions');

   async search(searchText) {
      await this.inpSearch.setValue(searchText); // vai ate o elemento do tipo input e digita um texto
      await browser.keys('Enter'); //presiona a tecla Enter
   }
}
