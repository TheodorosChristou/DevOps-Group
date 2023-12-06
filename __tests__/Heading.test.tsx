import React from 'react';
import { render, screen } from '@testing-library/react';
import Heading from '@/components/Heading';
import { useTranslation } from 'react-i18next';

jest.mock('i18next', () => ({
  t: (i) => i
}))

describe('Heading Component', () => {
  it('renders the title', () => {
    render(<Heading />);
    const heading = "Mongeese Map"
    expect (heading).toBeInTheDocument()});
  });

  it('renders the meta description', () => {
    render(<Heading />);
    
    // Ensure the meta description element is rendered with the correct content
    const metaDescriptionElement = screen.getByText('description');
    expect(metaDescriptionElement).toHaveAttribute('content', 'Home');
  });

  it('renders the favicon link', () => {
    render(<Heading />);
    
    // Ensure the favicon link element is rendered with the correct href
    const faviconElement = screen.getByText('icon');
    expect(faviconElement).toHaveAttribute('href', '/img/mongoose.ico');
  });
