import { test, expect, chromium } from '@playwright/test';
//import { chromium } from 'playwright';
import { PlaywrightBlocker } from '@cliqz/adblocker-playwright';
import fetch from 'cross-fetch'; // Required for fetching filter lists

test.beforeEach(async ({ page }) => {
    //const browser = await chromium.launch({ headless: false });
    //const context = await browser.newContext();
    //const page = await context.newPage();

    // Enable ad blocking
    PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
        blocker.enableBlockingInPage(page);
    });

    await page.goto('https://automationexercise.com/');
    // Ads and trackers will now be blocked
});

//await page.goto('https://automationexercise.com/')


test('has title', async ({ page }) => {

});