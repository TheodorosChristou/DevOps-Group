import React from 'react'
import {render, screen} from '@testing-library/react'
import Heading from '@/components/Heading'
import { useTranslation } from 'react-i18next';

jest.mock("next-auth/react", () => {
    const originalModule = jest.requireActual('next-auth/react');
    const mockSession = {
      expires: new Date(Date.now() + 2 * 86400).toISOString(),
      user: { username: "admin" }
    };
    return {
      __esModule: true,
      ...originalModule,
      useSession: jest.fn(() => {
        return {data: mockSession, status: 'authenticated'}  // return type is [] in v3 but changed to {} in v4
      }),
    };
  });

  jest.mock('react-i18next', () => ({
    ...jest.requireActual('react-i18next'),
    useTranslation: () => ({ t: key => key }),
  }));
  
  describe('YourComponent', () => {
    it('renders with the correct title', () => {
      const { getByText } = render(<Heading />);
      const titleElement = getByText('Mongeese Map');
          
      expect(titleElement).toBe('Mongeese Map');
      expect(titleElement.tagName).toBe('Map');
    });
  });




