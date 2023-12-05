# Jest and React Testing Library Documentation

## Overview

Jest and React Testing Library are integral tools for testing React applications. Jest, a JavaScript testing framework developed by Facebook, offers features such as snapshot testing and built-in mocking to ensure efficient and reliable tests. On the other hand, React Testing Library provides utility functions encouraging a user-centric testing approach, focusing on what the user can see and interact with rather than implementation details. Its philosophy emphasizes accessibility and DOM testing, making it easier to write tests that simulate user interactions. Together, Jest and React Testing Library form a powerful combination for testing React components, enabling developers to create comprehensive and user-focused test suites. In a typical setup, Jest serves as the testing framework orchestrating the tests, while React Testing Library's utilities simplify the interaction and assertion on React components, fostering a testing methodology aligned with user experience.

## Configuration

### Jest-config.js

**Import next/jest:**
- Imports the `next/jest` module, a package provided by Next.js for Jest configurations tailored to Next.js projects.

**Create Jest Config:**
- Calls `nextJest` with an object specifying the app's directory (`dir: './'`) to load Next.js configuration files (`next.config.js` and `.env`) in the test environment.

**Custom Jest Configuration:**
- Defines a custom Jest configuration object (`config`) with options such as:
  - `setupFilesAfterEnv`: An array of setup files to run after Jest setup, pointing to a setup file at the root directory (`jest.setup.js`).
  - `testEnvironment`: Specifies the test environment, set to 'jest-environment-jsdom' for JSDOM (JavaScript implementation of the DOM).
  - `preset`: Uses the Jest preset for TypeScript (`ts-jest`), indicating integrated TypeScript support.

**Export Configuration:**
- Exports the Jest configuration using `module.exports`, and `createJestConfig` ensures asynchronous configuration creation for proper Next.js loading.

### Jest-setup.js

**Import `@testing-library/jest-dom/extend-expect`:**
- Adds extended matchers to Jest from the `@testing-library/jest-dom` library.
- This import enhances Jest's built-in matchers to provide additional functionality for testing DOM elements.
- The `extend-expect` module is commonly used in testing libraries, including React Testing Library, to improve the readability and expressiveness of test assertions related to the DOM.
- It allows for more intuitive and readable assertions in tests, making it easier to write and maintain test cases for React components.

## Usage

### Error.test.tsx

**Import Statements:**
- React is imported for creating React elements.
- Testing utilities from `@testing-library/react` are imported, including the `render` function and the `screen` object for querying elements.
- The `Error` component is imported from the `@/components/Error` module.

**Test: 'Should have an image':**
- Renders the `Error` component.
- Queries for an image element with the alternative text '404 image' using `screen.getByAltText`.
- Asserts that the image should be present in the document.

**Test: 'Should have a link':**
- Renders the `Error` component.
- Queries for an element with the test ID 'link' using `screen.getByTestId`.
- Asserts that the element (presumably a link) should have the CSS class 'mb-5'.

**Test: 'Should have a heading':**
- Renders the `Error` component.
- Queries for an element with the test ID 'heading' using `screen.getByTestId`.
- Asserts that the element (presumably a heading) should have the CSS class 'flex-col'.

### Heading.test.tsx

**Imports:**
- React, `@testing-library/react`, and `react-i18next` are imported for creating React elements, testing utilities, and handling translations.
- The `Heading` component to be tested is imported.

**Mocking `next-auth` and `react-i18next`:**
- The code uses `jest.mock` to mock the behavior of `next-auth/react` and `react-i18next`.
  - For `next-auth/react`, it provides a mock implementation of the `useSession` function to simulate an authenticated user session.
  ```tsx
  jest.mock("next-auth/react", () => {
    const originalModule = jest.requireActual('nextauth/react');
    const mockSession = {
      expires: new Date(Date.now() + 2 * 86400).toISOString(),
      user: { username: "admin" }
    };
    return {
      __esModule: true,
      ...originalModule,
      useSession: jest.fn(() => {
        return { data: mockSession, status: 'authenticated' }
      }),
    };
  });

- For react-i18next, it mocks the useTranslation hook, returning a simple translation function.
```tsx
jest.mock('react-i18next', () => ({
  ...jest.requireActual('react-i18next'),
  useTranslation: () => ({ t: key => key }),
}));
```

## Test Case: 'renders with the correct title':

- The test is wrapped in a describe block, creating a test suite named 'YourComponent'.

- The test case uses the render function to render the Heading component.

- It queries the rendered component for an element containing the text 'Mongeese 
Map' using getByText.

- Two assertions are made:
    -    expect(titleElement).toBe('Mongeese Map') checks that the text content of the element is exactly 'Mongeese Map'.
    - expect(titleElement.tagName).toBe('Map') checks that the tag name of the element is 'Map'.

## More:
https://jestjs.io/

https://testing-library.com/docs/react-testing-library/intro/

https://nextjs.org/docs/pages/building-your-application/optimizing/testing