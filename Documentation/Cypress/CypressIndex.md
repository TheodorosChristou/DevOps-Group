# Cypress Index Testing Documentation

## Overview

This document provides documentation for the Cypress test suite named "Index Page Test." This suite is designed to test the functionality of the index page of a web application accessible at http://localhost:8080.

## Test Cases

### 1. Checking Page Title Visibility

#### Test Name: `checks that the page title is shown`

##### Description:

This test verifies that the page title is visible on the index page.

##### Test Steps:

1. Visit the URL http://localhost:8080.
2. Confirm the existence of the page title using the `data-test` attribute.

```javascript
cy.get("[data-test='title']").should("exist");
```

### 2. Checking Lat and Lon Values

#### Test Name: `checks that lat and lon values are shown`

##### Description:

This test ensures that latitude and longitude values are visible on the index page. It also verifies the presence of 14 values and checks if one of them is equal to 51.5072.

##### Test Steps:

1. Visit the URL http://localhost:8080.
2. Confirm the existence of the lat-lon values container using the `data-test` attribute.
3. Verify that there are exactly 14 lat-lon values.
4. Confirm that one of the lat-lon values is equal to 51.5072.

```javascript
cy.get("[data-test='lat-lon-values']").should("exist");
cy.get("[data-test='lat-lon-values']").should("have.length", 14);
cy.get("[data-test='lat-lon-values']").contains("51.5072");
```
