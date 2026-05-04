import { Locator, Page } from "@playwright/test";
import { HomePage } from "./homePage";

export class PageManager{

    private readonly page:Page
    private readonly homePage: HomePage

    constructor(page: Page){
        this.page = page
        this.homePage = new HomePage(this.page)
    }

    navigateTo(){
        return this.homePage
    }

    async productsPage(){
        return this.productsPage
    }
}