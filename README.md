# Playwright Automation Exercise

A comprehensive end-to-end (E2E) and API testing automation suite built with **Playwright** and **TypeScript** for testing the [AutomationExercise](https://automationexercise.com/) platform.

## Overview

This project demonstrates best practices in modern test automation including:
- **Page Object Model (POM)** design pattern for maintainable test code
- **End-to-End (E2E) testing** for user workflows (login, signup, checkout, etc.)
- **API testing** for backend validation
- **Ad & tracker blocking** for cleaner test execution
- **Data-driven testing** using Faker.js for realistic test data

## Tech Stack

- **Playwright**: Modern cross-browser testing framework
- **TypeScript**: Type-safe test code
- **Faker.js**: Generates realistic test data
- **AdBlocker**: Removes ads and trackers during tests
- **Node.js**: Runtime environment

## Project Structure

```
├── tests/
│   ├── e2e/              # End-to-end tests (UI workflows)
│   │   └── loginTests.spec.ts
│   └── api/              # API tests
│       ├── productsApiTests.spec.ts
│       └── brandsApiTests.spec.ts
├── page-objects/         # Page Object Model classes
│   ├── homePage.ts
│   ├── signUpLoginPage.ts
│   ├── productsPage.ts
│   ├── cartPage.ts
│   └── pageManager.ts    # Centralized page object management
├── test-data/            # Test data files
├── playwright.config.ts  # Playwright configuration
└── package.json          # Project dependencies
```

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd playwright-automationexercise
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in specific file
```bash
npx playwright test tests/e2e/loginTests.spec.ts
```

### Run tests in headed mode (see browser)
```bash
npx playwright test --headed
```

### Run tests with UI mode
```bash
npx playwright test --ui
```

### Generate and view HTML report
```bash
npx playwright test
npx playwright show-report
```

## Test Coverage

### E2E Tests
- **User Registration**: Signup workflow with validation
- **User Login**: Authentication flow
- **Product Browsing**: Browse and filter products
- **Shopping Cart**: Add/remove items, checkout flow
- **Account Management**: View orders, delete account

### API Tests
- **Products API**: Fetch product lists and details
- **Brands API**: Validate brand data

## Configuration

The `playwright.config.ts` file includes:
- Parallel test execution for faster feedback
- HTML reporting for detailed test results
- Cross-browser support (Chromium, Firefox, WebKit)
- Automatic retries on CI environments
- Ad and tracker blocking for cleaner tests

## Key Features

✅ **Page Object Model** - Reusable page components  
✅ **Data-Driven Testing** - Faker.js for realistic data  
✅ **Ad Blocking** - Cleaner, faster test execution  
✅ **API + E2E Testing** - Full platform coverage  
✅ **HTML Reporting** - Detailed test results  
✅ **TypeScript** - Type-safe, maintainable code  

## Author

**QAgmoreno** - QA Automation Engineer

## License

ISC

## Repository

[GitHub - playwright-automation-exercise](https://github.com/gonzalomorenoqa-hub/playwright-automation-exercise)
