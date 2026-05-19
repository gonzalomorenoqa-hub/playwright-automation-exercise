import { Locator, Page } from "@playwright/test";

export class SignUpLoginPage {

    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }



    async loginToYourAccount() {
        await this.page.locator('[data-qa="login-email"]').fill('Gonzalo')
        await this.page.locator('[data-qa="login-password"]').fill('Anashe')
        await this.page.locator('[data-qa="login-button"]').click()
    }

    async signUp(name: string, email: string) {
        await this.page.locator('[data-qa="signup-name"]').fill(name)
        await this.page.locator('[data-qa="signup-email"]').fill(email)
        await this.page.locator('[data-qa="signup-button"]').click()
    }
}