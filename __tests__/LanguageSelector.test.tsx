// LanguageSelector.test.tsx

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import the jest-dom library for additional matchers
import LanguageSelector from '@/components/LanguageSelector';

// Mock the useTranslation hook
jest.mock('next-i18next', () => ({
  useTranslation: () => ({ t: key => key, i18n: { resolvedLanguage: 'en', changeLanguage: jest.fn() } }),
}));

describe('LanguageSelector Component', () => {
  it('renders language buttons with correct titles', () => {
    render(<LanguageSelector />);

    // Ensure that buttons for English and Greek are rendered
    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByText('Ελληνικά')).toBeInTheDocument();
  });

  it('applies font-bold to the active language button', () => {
    render(<LanguageSelector />);

    // Ensure that the active language button (English) has the 'font-bold' class
    expect(screen.getByText('English')).toHaveClass('font-bold');
    // Ensure that the inactive language button (Greek) does not have the 'font-bold' class
    expect(screen.getByText('Ελληνικά')).not.toHaveClass('font-bold');
  });

  it('calls changeLanguage function on button click', () => {
    render(<LanguageSelector />);

    // Click the Greek language button
    fireEvent.click(screen.getByText('Ελληνικά'));
    
})
})
