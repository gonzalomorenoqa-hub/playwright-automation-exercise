import { Locator, Page } from "@playwright/test";

export class CartPage{

    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async productsPage(){
        await this.page.locator('[href="/products"]').click()
    }
}