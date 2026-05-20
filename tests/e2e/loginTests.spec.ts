import { expect, test, chromium } from '@playwright/test';
import { PlaywrightBlocker } from '@cliqz/adblocker-playwright';
import { PageManager } from '../../page-objects/pageManager';
import fetch from 'cross-fetch'; // Required for fetching filter lists
import { faker } from '@faker-js/faker'

let blocker: PlaywrightBlocker;

test.beforeAll(async () => {
    // Initialize the blocker rules once for the whole test file
    blocker = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
});

test.beforeEach(async ({ page }) => {
    await blocker.enableBlockingInPage(page); // Ads and trackers will now be blocked
    await page.goto('https://automationexercise.com/');
});

/**
 * Test Case 1: Register User
 * 1. Launch browser
 * 2. Navigate to url 'http://automationexercise.com'
 * 3. Verify that home page is visible successfully
 * 4. Click on 'Signup / Login' button
 * 5. Verify 'New User Signup!' is visible
 * 6. Enter name and email address
 * 7. Click 'Signup' button
 * 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
 * 9. Fill details: Title, Name, Email, Password, Date of birth
 * 10. Select checkbox 'Sign up for our newsletter!'
 * 11. Select checkbox 'Receive special offers from our partners!'
 * 12. Fill details: First name, Last name, Company, Address, Address2, 
 *     Country, State, City, Zipcode, Mobile Number
 * 13. Click 'Create Account button'
 * 14. Verify that 'ACCOUNT CREATED!' is visible
 * 15. Click 'Continue' button
 * 16. Verify that 'Logged in as username' is visible
 * 17. Click 'Delete Account' button
 * 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
 */
test('01. Register User', async ({ page }) => {
    const pm = new PageManager(page)
    const randomName = faker.person.firstName()
    const randomEmail = `${randomName.replace(' ', '')}${faker.number.int(1000)}@test.com`
    const randomPassword = 'Password123!'

    expect(await page.locator('//img[@alt="Website for automation practice"]').isVisible());
    await pm.navigateTo().signUpLoginPage()
    expect(await page.locator(':text-is("New User Sign")').isVisible());
    await pm.onSignUpLoginPage().signUp(randomName, randomEmail)
    expect(await page.locator(':text-is("Enter Account Information")').isVisible());
    await pm.onSignUpLoginPage().createRandomAccount(randomName, randomPassword)
    expect(await page.locator(':text-is("Account Created!")').isVisible());
    await pm.onSignUpLoginPage().clickContinueButton()
    expect(await page.locator(`:text-is("Logged in as ${randomName}")`).isVisible());
    await pm.onHomePage().clickDeleteAccountButton()
    expect(await page.locator(':text-is("Account Deleted!")').isVisible());
    await pm.onSignUpLoginPage().clickContinueButton()
});

/**
 * Test Case 2: Login User with correct email and password
 * 1. Launch browser
 * 2. Navigate to url 'http://automationexercise.com'
 * 3. Verify that home page is visible successfully
 * 4. Click on 'Signup / Login' button
 * 5. Verify 'Login to your account' is visible
 * 6. Enter correct email address and password
 * 7. Click 'login' button
 * 8. Verify that 'Logged in as username' is visible
 * 9. Click 'Delete Account' button
 * 10. Verify that 'ACCOUNT DELETED!' is visible
 */
test('02: Login User with correct email and password', async ({ page }) => {
    const pm = new PageManager(page)
    const randomName = faker.person.firstName()
    const randomEmail = `${randomName.replace(' ', '')}${faker.number.int(1000)}@test.com`
    const randomPassword = 'Password123!'

    expect(await page.locator('//img[@alt="Website for automation practice"]').isVisible());
    await pm.navigateTo().signUpLoginPage()
    expect(await page.locator(':text-is("New User Sign")').isVisible());
    await pm.onSignUpLoginPage().signUp(randomName, randomEmail)
    expect(await page.locator(':text-is("Enter Account Information")').isVisible());
    await pm.onSignUpLoginPage().createRandomAccount(randomName, randomPassword)
    expect(await page.locator(':text-is("Account Created!")').isVisible());
    await pm.onSignUpLoginPage().clickContinueButton()
    expect(await page.locator(`:text-is("Logged in as ${randomName}")`).isVisible());
    await pm.onHomePage().clickLogOutAccountButton()
    await pm.navigateTo().signUpLoginPage()

    expect(await page.locator(':text-is("Login to your account")').isVisible());
    await pm.onSignUpLoginPage().loginToYourAccount(randomEmail, randomPassword)
    expect(await page.locator(`:text-is("Logged in as ${randomName}")`).isVisible());
    await pm.onHomePage().clickDeleteAccountButton()
    expect(await page.locator(':text-is("Account Deleted!")').isVisible());
});

/**
 * Test Case 3: Login User with incorrect email and password
*   1. Launch browser
*   2. Navigate to url 'http://automationexercise.com'
*   3. Verify that home page is visible successfully
*   4. Click on 'Signup / Login' button
*   5. Verify 'Login to your account' is visible
*   6. Enter incorrect email address and password
*   7. Click 'login' button
*   8. Verify error 'Your email or password is incorrect!' is visible
 */
test('03. Login User with incorrect email and password', async ({ page }) => {
    const pm = new PageManager(page)
    const randomName = faker.person.firstName()
    const randomEmail = `${randomName.replace(' ', '')}${faker.number.int(1000)}@test.com`
    const randomPassword = 'Password123!'

    expect(await page.locator('//img[@alt="Website for automation practice"]').isVisible());
    await pm.navigateTo().signUpLoginPage()
    expect(await page.locator(':text-is("Login to your account")').isVisible());
    await pm.onSignUpLoginPage().loginToYourAccount(randomEmail, randomPassword)
    expect(await page.locator(':text-is("Your email or password is incorrect!")').isVisible());
});