import { Locator, Page } from "@playwright/test";
import { HomePage } from "./homePage";
import { ProductsPage } from "./productsPage";
import { CartPage } from "./cartPage";
import { SignUpLoginPage } from "./signUpLoginPage";

export class PageManager {

    private readonly page: Page
    private readonly homePage: HomePage
    private readonly productsPage: ProductsPage
    private readonly cartPage: CartPage
    private readonly signUpLoginPage: SignUpLoginPage

    constructor(page: Page) {
        this.page = page
        this.homePage = new HomePage(this.page)
        this.productsPage = new ProductsPage(this.page)
        this.cartPage = new CartPage(this.page)
        this.signUpLoginPage = new SignUpLoginPage(this.page)
    }

    navigateTo() {
        return this.homePage
    }

    onHomePage() {
        return this.homePage
    }

    onProductsPage() {
        return this.productsPage
    }

    onCartPage() {
        return this.cartPage
    }

    onSignUpLoginPage() {
        return this.signUpLoginPage
    }

}