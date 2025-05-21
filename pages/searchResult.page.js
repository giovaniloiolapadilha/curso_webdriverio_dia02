import { $$ } from '@wdio/globals'

export class SearchResultPage {
   txtProductTitle = $$('h2[class="woocommerce-loop-product__title"]');
   txtNotFoundProductMessage = $('p[class="woocommerce-info"]');
}
