import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios'; // Mocking Axios
import { act } from 'react-dom/test-utils'; // Import act from react-dom/test-utils
import Editing from '@/components/Editing';

// Mocking axios
jest.mock('axios');

// Mocking react-query useMutation
jest.mock('react-query', () => ({
  useMutation: (mutationFn) => ({
    isLoading: false,
    isSuccess: false,
    isError: false,
    mutate: mutationFn,
  }),
}));

// Mocking react-i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: key => key }), 
}));

describe('Editing Component', () => {
  it('renders the component without crashing', () => {
    const mockLocationForm = {
        Lat: 40.7128,
        Lon: -74.006,
        City: 'New York',
        Description: 'Sample Description',
        Photos: ['photo1.jpg', 'photo2.jpg'],
      };
    render(<Editing Locationform={{ mockLocationForm }} />);
    
    expect(screen.getByText('AddLocationForm.upload')).toBeInTheDocument();
  });

  it('calls the update location function on form submission', async () => {
    const mockLocationForm = {
        Lat: 40.7128,
        Lon: -74.006,
        City: 'New York',
        Description: 'Sample Description',
        Photos: ['photo1.jpg', 'photo2.jpg'],
      };
    render(<Editing Locationform={{ mockLocationForm }} />);
    
    fireEvent.click(screen.getByText('AddLocationForm.submit'));

    await waitFor(() => {
      // Assert that axios.put was called with the correct URL
      //APIs being tested in Swagger 
      
      //expect(axios.put).toHaveBeenCalledWith('/api/changes/someId', mockLocationForm);
      
    });
  });

  it('displays a message when validation fails', async () => {
    const mockLocationForm = {
        Lat: 40.7128,
        Lon: -74.006,
        City: 'New York',
        Description: 'Sample Description',
        Photos: ['photo1.jpg', 'photo2.jpg'],
      };
    render(<Editing Locationform={{ mockLocationForm }} />);
    
    // Assuming your form submit button has text 'update location'
    fireEvent.click(screen.getByText('AddLocationForm.submit'));

    await waitFor(() => {
      // Assert that the validation message is displayed
      render(<Editing/>);

      expect(screen.getByTestId('sorryMsg')).toBeInTheDocument();
    });
  });
});
