import { test, expect, request } from '@playwright/test';

test.beforeEach(async ({ page }) => {

  // await page.route("https://automationexercise.com/api/productsList", async route => {
  //   await route.fulfill({
  //     body: JSON.stringify(tags)
  //   })
  //})

  await page.goto('https://automationexercise.com/');
})

test('01. GET All Products List', async ({ page, request }) => {

  const productsListResponse = await request.get('https://automationexercise.com/api/productsList')

  await page.route("https://automationexercise.com/api/productsList", async route => {
    const response = await route.fetch()
    const responseBody = await response.json()

    await route.fulfill({
      body: JSON.stringify(responseBody)
    })
    expect(response.status()).toEqual(200)
    expect(productsListResponse.status()).toEqual(200)
  })

})

test('02. POST to All Products List', async ({ page, request }) => {
  const response = await request.post('https://automationexercise.com/api/productsList', {
    data: {}
  })
  const responseBody = await response.json()
  expect(responseBody.responseCode).toEqual(405)
  expect(responseBody.message).toEqual("This request method is not supported.")
})

test('03. GET All Brands List', async ({ page, request }) => {

})

test('04. PUT to All Brands List', async ({ page, request }) => {
  const response = await request.put('https://automationexercise.com/api/brandsList', {
    data: {}
  })
  const responseBody = await response.json()
  expect(responseBody.responseCode).toEqual(405)
  expect(responseBody.message).toEqual("This request method is not supported.")
})