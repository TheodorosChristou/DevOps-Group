# FieldValidation Component

## **FieldValidation  Function**

The `FieldValidation` function is designed to provide validation rules for form fields based on a given check. It is commonly used with the `react-hook-form` library to define validation requirements.

## Usage

To use this function, import it into your TypeScript React application.

```tsx
import FieldValidation from './FieldValidation';

// Example usage
const validationRules = FieldValidation(true);
```

## Parameters

- check: A boolean value determining whether validation rules should be applied. 
If true, the function returns rules for a required field; otherwise, it returns false.

## Returns
- The function returns an object representing validation rules for the react-hook-form library.

If check is true:

```tsx
{required: {value: true, message: "Validation message"}}
```
This specifies that the field is required with the provided validation message.

If check is false:

```tsx

{required: false}
```

This indicates that no validation rules are applied.

## **NumberValidation Function**
The NumberValidation function provides validation rules specifically for numeric input fields. It checks if the provided value is a valid number.

## Usage
To use this function, import it into your TypeScript React application.

```tsx

import { NumberValidation } from './FieldValidation';

// Example usage
const numberValidationRules = NumberValidation(42);
```
## Parameters
- value: The value to be validated as a number.

## Returns
The function returns an object representing validation rules for the react-hook-form library.

- If the value is not a valid number:

```tsx
{required: {value: true, message: "Number validation message"}}
```
This specifies that the field must be a valid number with the provided validation message.

- If the value is a valid number:

```tsx
{required: false}
```
This indicates that no validation rules are applied.

## More:
https://react.i18next.com/