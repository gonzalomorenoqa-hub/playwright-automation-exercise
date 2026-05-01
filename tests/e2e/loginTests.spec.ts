import { test, expect, chromium } from '@playwright/test';
//import { chromium } from 'playwright';
import { PlaywrightBlocker } from '@cliqz/adblocker-playwright';
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

test('01. Register User', async ({ page, expect }) => {
    expect(await page.locator('//img[@alt="Website for automation practice"]').isVisible());
});