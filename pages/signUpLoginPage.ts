import { Locator, Page } from "@playwright/test";

export class SignUpLoginPage {

    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }



    async loginToYourAccount(email: string, password: string) {
        await this.page.locator('[data-qa="login-email"]').fill(email)
        await this.page.locator('[data-qa="login-password"]').fill(password)
        await this.page.locator('[data-qa="login-button"]').click()
    }

    async signUp(name: string, email: string) {
        await this.page.locator('[data-qa="signup-name"]').fill(name)
        await this.page.locator('[data-qa="signup-email"]').fill(email)
        await this.page.locator('[data-qa="signup-button"]').click()
    }

    /**
     * Method to fill out the Enter Account Information form with all the details
     * @param male - one if male, two if female
     * @param password - the password for the new account
     * @param dayOfBirth - the day of birth
     * @param monthOfBirth - the month of birth
     * @param yearOfBirth - the year of birth
     * @param newsletter - true if the user wants to subscribe to the newsletter
     * @param specialOffers - true if the user wants to receive special offers
     * @param firstName - the first name of the user
     * @param lastName - the last name of the user
     * @param company - the company name
     * @param address - the address
     * @param country - the country
     * @param state - the state
     * @param city - the city
     * @param zipcode - the zip code
     * @param mobileNumber - the mobile number
     */
    async fillEnterAccountInformationPage(male: number, name:string, password: string, dayOfBirth: number, monthOfBirth: number, yearOfBirth: number, newsletter: boolean, specialOffers: boolean, firstName: string, lastName: string, company: string, address: string, country: string, state: string, city: string, zipcode: number, mobileNumber: number){
        await this.page.locator(`#id_gender${male}`).check()
        await this.page.locator('#name').fill(name)
        await this.page.locator('#password').fill(password)
        await this.page.locator('#days').selectOption(dayOfBirth.toString())
        await this.page.locator('#months').selectOption(monthOfBirth.toString())
        await this.page.locator('#years').selectOption(yearOfBirth.toString())
        if(newsletter){
            await this.page.locator('#newsletter').check()
        }
        if(specialOffers){
            await this.page.locator('#optin').check()
        }
        await this.page.locator('#first_name').fill(firstName)
        await this.page.locator('#last_name').fill(lastName)
        await this.page.locator('#company').fill(company)
        await this.page.locator('#address1').fill(address)
        await this.page.locator('#country').selectOption(country)
        await this.page.locator('#state').fill(state)
        await this.page.locator('#city').fill(city)
        await this.page.locator('#zipcode').fill(zipcode.toString())
        await this.page.locator('#mobile_number').fill(mobileNumber.toString())
        await this.page.locator('[data-qa="create-account"]').click()
    }

    async clickContinueButton(){
        await this.page.locator('[data-qa="continue-button"]').click()
    }

    async createRandomAccount(randomName: string, randomPassword: string){
        await this.fillEnterAccountInformationPage(1, randomName, randomPassword, 1, 1, 1990, true, true, randomName, randomName, 'Company', 'Address', 'India', 'State', 'City', 12345, 1234567890)
    }
}