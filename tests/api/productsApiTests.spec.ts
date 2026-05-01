import { test, expect, request } from '@playwright/test';
//import tags from '../test-data/tags.json'

test.beforeEach(async ({ page }) => {

  // await page.route("https://automationexercise.com/api/productsList", async route => {
  //   await route.fulfill({
  //     body: JSON.stringify(tags)
  //   })
  //})

  await page.goto('https://automationexercise.com/');
})

test('Get All Products List', async ({ page, request }) => {

  const productsListResponse = await request.get('https://conduit-api.bondaracademy.com/api/articles/')

  await page.route("*/**/api/productsList", async route => {
    const response = await route.fetch()
    const responseBody = await response.json()

    await route.fulfill({
      body: JSON.stringify(responseBody)
    })

    console.log(responseBody.responseCode)
    console.log(response.status())
    expect(response.status()).toEqual(200)
    expect(productsListResponse.status()).toEqual(200)
  })

})