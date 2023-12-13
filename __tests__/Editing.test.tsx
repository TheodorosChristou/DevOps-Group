import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios'; // Mocking Axios
import { act } from 'react-dom/test-utils'; 
import Editing from '@/components/Editing';
import { _id } from '@next-auth/mongodb-adapter';
import { QueryClient, QueryClientProvider } from 'react-query';



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
        Photos: ['photo2.jpg'],
      };
    render(<Editing Locationform={{ mockLocationForm }} />);
    
    expect(screen.getByText('AddLocationForm.upload')).toBeInTheDocument();
  });

  it('calls the update location function on form submission', async () => {
    const mockLocationForm = {
       _id: "65707e94e7777c3e9b149366",
        Lat: 40.7128,
        Lon: -74.006,
        City: 'New York',
        Description: 'Sample Description',
        Photos: ['photo1.jpg'],
      };
    render(<Editing Locationform={{ mockLocationForm }} />);
    
    fireEvent.click(screen.getByText('AddLocationForm.submit'));

    await waitFor(() => {
      // Assert that axios.put was called with the correct URL
      //APIs being tested in Swagger 
      
      expect(axios.put).toHaveBeenCalledWith('/api/changes/65707e94e7777c3e9b149366',{"_id": "65707e94e7777c3e9b149366","City": "New York", "Description": "1", "Lat": "40.7128", "Lon": "-74.006", "Photos": ["photo1.jpg"]});
      
    });
  });

  it('should display sorry message on failed validation', async () => {
    const mockLocationForm = {
      Lat: 'invalid',
      Lon: 'invalid',
      City: 'invalid',
      Description: 'invalid',
      Photos: [null],

    };

    render(
          <Editing />      );

    // Fill in the form with invalid values
    fireEvent.change(screen.getByTestId('LatTest'), { target: { value: mockLocationForm.Lat } });
    fireEvent.change(screen.getByTestId('LonTest'), { target: { value: mockLocationForm.Lon } });
    fireEvent.change(screen.getByTestId('CityTest'), { target: { value: mockLocationForm.City } });
    fireEvent.change(screen.getByTestId('DescTest'), { target: { value: mockLocationForm.Description } });
    //fireEvent.change(screen.getByTestId('uploadPhoto'), { target: { value: mockLocationForm.Photos } });
    // Trigger form submission
    fireEvent.click(screen.getByText('AddLocationForm.submit'));

    // Wait for the sorry message to be displayed
    await waitFor(() => {
      // Assert that the sorry message is displayed
      expect(screen.getByTestId('sorryMsg')).toBeInTheDocument();
    });
  });
});
