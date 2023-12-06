# Cypress Map Test Documentation

## Overview

This document provides documentation for the Cypress test suite named "Map Test." This suite is designed to test the functionality of a map displayed on a web page accessible at http://localhost:8080/map.

## Test Cases

### 1. Checking Map Visibility

#### Test Name: `checks the map is shown`

##### Description:

This test ensures that the map is visible on the web page.

##### Test Steps:

1. Visit the URL http://localhost:8080/map.
2. Confirm the existence of the map item using the `data-test` attribute.


```javascript
cy.get("[data-test='map-item']").should("exist");`
```
