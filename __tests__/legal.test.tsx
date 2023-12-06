import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 

import Legal from '@/components/Legal';

test('renders Legal component with title', () => {
  render(<Legal />);

  const titleElement = screen.getByText(/legalTitle/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders Legal component with license links', () => {
  render(<Legal />);

  const licenseLinks = screen.getAllByRole('link');
  expect(licenseLinks.length).toBeGreaterThanOrEqual(1);
});

const orangeLinks = screen.getAllByRole('link');
orangeLinks.forEach(link => {
  expect(link).toHaveStyle({ color: 'orange' });
});

