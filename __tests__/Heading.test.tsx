import React from 'react';
import { render, screen } from '@testing-library/react';
import Heading from '@/components/Heading';

jest.mock('react-i18next', () => ({
  ...jest.requireActual('react-i18next'),
  useTranslation: () => ({ t: key => key }),
}));

describe('Heading Component', () => {
  it('renders the title with the correct translation key', () => {
    render(<Heading />);
    
    // Ensure the title element is rendered with the correct translation key
    const titleElement = screen.getByText('title');
    expect(titleElement).toHaveTextContent('heading.heading');
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
    const faviconElement = screen.getByLabelText('icon');
    expect(faviconElement).toHaveAttribute('href', '/img/mongoose.ico');
  });
});
