import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://automationexercise.com/')
})

test('has title', async ({ page }) => {

})