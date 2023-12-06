# Upload Cypress Test Documentation

## Overview

This document provides documentation for the Cypress test suite named "Upload Test." This suite is designed to test the functionality of an upload form on a web page accessible at http://localhost:8080/upload.

## Test Cases

### 1. Checking Form Visibility

#### Test Name: `checks the form is shown`

##### Description:

This test ensures that the upload form is visible on the web page.

##### Test Steps:

1. Visit the URL http://localhost:8080/upload.
2. Confirm the existence of the upload form using the `data-test` attribute.

```javascript
cy.get("[data-test='upload-form']").should("exist");
```

### 2. Preventing Invalid Form Submission

#### Test Name: `prevents an invalid form from being submitted`

##### Description:

This test verifies that the form correctly prevents submission when it contains invalid data.

##### Test Steps:

1. Visit the URL http://localhost:8080/upload.
2. Ensure that error messages for latitude, longitude, city, and description fields are initially empty.
3. Attempt to submit the form.
4. Verify that error messages for latitude, longitude, city, and description fields are not empty.

```javascript
cy.getByData("lat-error").should("be.empty");
cy.getByData("lon-error").should("be.empty");
cy.getByData("city-error").should("be.empty");
cy.getByData("desc-error").should("be.empty");

cy.getByData("submit-button").click();

cy.getByData("lat-error").should("not.be.empty");
cy.getByData("lon-error").should("not.be.empty");
cy.getByData("city-error").should("not.be.empty");
cy.getByData("desc-error").should("not.be.empty");
```

### 3. Removing Errors and Creating New Location

#### Test Name: `removes errors when correct values are entered and creates a new location`

##### Description:

This test ensures that errors are removed when valid data is entered, and the form successfully creates a new location.

##### Test Steps:

1. Attempt to submit the form with empty fields.
2. Enter valid values for latitude, longitude, city, and description.
3. Verify that error messages for each field become empty.
4. Submit the form again.

```javascript
cy.getByData("submit-button").click();
cy.getByData("lat-input").type("0.3");
cy.getByData("lat-error").should("be.empty");

cy.getByData("lon-input").type("2.5");
cy.getByData("lon-error").should("be.empty");

cy.getByData("city-input").type("test");
cy.getByData("city-error").should("be.empty");

cy.getByData("desc-input").type("test");
cy.getByData("desc-error").should("be.empty");

cy.getByData("submit-button").click();
```
