import { Locator, Page } from "@playwright/test";

export class HomePage {

    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async productsPage() {
        await this.page.locator('[href="/products"]').click()
    }

    async signUpLoginPage() {
        await this.page.locator('[href="/login"]').click()
    }

    async clickDeleteAccountButton() {
        await this.page.locator('[href="/delete_account"]').click()
    }
}