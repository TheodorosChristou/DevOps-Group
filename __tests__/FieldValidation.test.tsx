import { render } from '@testing-library/react';
import { useTranslation } from 'react-i18next';
import { NumberValidation } from '@/components/FieldValidation';
import  FieldValidation from '@/components/FieldValidation';

// Mock the useTranslation hook
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: key => key }),
}));
describe('FieldValidation', () => {
    it('returns validation object with message if check is true', () => {
      const result = FieldValidation(true);
  
      // Ensure that the validation object is returned with the correct message
      expect(result).toEqual({ required: { value: true, message: 'validation.validator' } });
    });
  
    it('returns validation object with false if check is false', () => {
      const result = FieldValidation(false);
  
      // Ensure that the validation object is returned with required set to false
      expect(result).toEqual({ required: false });
    });
  });
  
  describe('NumberValidation', () => {
  
    it('returns validation object with false if value is a number', () => {
      const result = NumberValidation(42);
  
      // Ensure that the validation object is returned with required set to false
      expect(result).toEqual({ required: false });
    });
  });