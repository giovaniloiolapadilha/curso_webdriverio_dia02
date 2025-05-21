import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'
import { HeaderPage } from '../pages/header.page';
import { SearchResultPage } from '../pages/searchResult.page';
import { BlogPage } from '../pages/blog.page';
import { PromotionsPage } from '../pages/promotions.page';

const header = new HeaderPage();
const searchResult = new SearchResultPage();
const blog = new BlogPage();
const promotions = new PromotionsPage();

Given('I open the url', async () => {
    await browser.url('https://demos.bellatrix.solutions/'); //acessa o website
    await browser.maximizeWindow(); //maximiza o ecrã
});

When('I search by {string}', async (searchText) => {
    await header.search(searchText); //chama a funcao search da HeaderPage. Essa funcao passando um texto no input "search products" no menu do website
});

When('I go to blog menu', async () => {
    await header.btnMenuBlog.click(); //clica no elemento btnMenuBlog que esta na HeaderPage
});

When('I go to Promotions menu', async () => {
    await header.btnMenuPromotions.click();
});

When('I search by the title of the first item in the blog', async () => {
    const textFirstArticleTitle = await blog.txtFirstArticleTitle.getText(); //obtem o texto do elemento txtFirstActitleTitle do BlogPage
    await header.search(textFirstArticleTitle); //faz uma busca usando o texto capturado no passo anterior 
});

When('I search by the title of the first product tittle in the blog', async () => {
   const textFirstProductTitle = await promotions.txtFirstProductTitle.getText();
   await header.search(textFirstProductTitle);
});

Then('the first product is {string}', async (productTitle) => {
    const firstProductTitle = searchResult.txtProductTitle[0]; //cria um elemento pegando o primeiro elemento da lista de elemento txtProductTitle

    await expect(firstProductTitle).toHaveText(productTitle); //verifica se o primeiro elemento da lista txtProductitle possui o texto vindo da variavel productTitle
});

Then('the second product is {string}', async (productTitle) => {
    const secondProductTitle = searchResult.txtProductTitle[1];

    await expect(secondProductTitle).toHaveText(productTitle);
});

Then('I can see no products found message', async () => {
    await expect(searchResult.txtNotFoundProductMessage).toBeDisplayed(); //verifica se o elemento txtNotFoundProductMessage da SearchResultPage está visivel no ecrã
});


Then('I can see the button add to cart', async () => {
    await expect(searchResult.btnAddToCart).toBeDisplayed();
});


