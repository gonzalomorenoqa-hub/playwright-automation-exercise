import { expect, test, chromium } from '@playwright/test';
import { PlaywrightBlocker } from '@cliqz/adblocker-playwright';
import { PageManager } from '../../page-objects/pageManager';
import fetch from 'cross-fetch'; // Required for fetching filter lists

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
 * 1. Launch browser
 * 2. Navigate to url 'http://automationexercise.com'
 * 3. Verify that home page is visible successfully
 * 4. Click on 'Signup / Login' button
 * 5. Verify 'New User Signup!' is visible
 * 6. Enter name and email address
 * 7. Click 'Signup' button
 * 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
 */
test('01. Register User', async ({ page }) => {
    const pm = new PageManager(page)           
    //await pm.navigateTo()
    expect(await page.locator('//img[@alt="Website for automation practice"]').isVisible()); 
    await pm.navigateTo().signUpLoginPage()     
    //await pm.onSignUpLoginPage().loginToYourAccount()
    expect(await page.locator(':text-is("New User Sign")').isVisible());    
    await pm.onSignUpLoginPage().signUp('Gonza', 'test@test.com')
    expect(await page.locator(':text-is("Enter Account Information")').isVisible());  

});