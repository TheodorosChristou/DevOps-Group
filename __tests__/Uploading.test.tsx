import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Uploading from '@/components/Uploading'; // Adjust the path accordingly
import axios from 'axios'; // Mocking Axios
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

jest.mock('cloudinary', () => ({
    createUploadWidget: jest.fn(),
  }));
jest.mock('react-i18next', () => ({
    useTranslation: () => ({
      t: (key) => key,
    }),
  }));
jest.mock('axios'); // Mocking axios module

describe('Uploading Component', () => {
  it('should submit the form on successful validation', async () => {
    const mockLocationForm = {
      Lat: "40.7128",
      Lon: "-74.006",
      City: 'New York',
      Description: 'Sample Description',
      Photos: [null],
    };

    // Mock axios.post to resolve with a success response
    //axios.post.mockResolvedValueOnce();
    //APIs tested in Swagger


    render(
        <QueryClientProvider client={queryClient}>
          <Uploading />
        </QueryClientProvider>
      );

    fireEvent.change(screen.getByTestId('LatTest'), { target: { value: mockLocationForm.Lat } });
    fireEvent.change(screen.getByTestId('LonTest'), { target: { value: mockLocationForm.Lon } });
    fireEvent.change(screen.getByTestId('CityTest'), { target: { value: mockLocationForm.City } });
    fireEvent.change(screen.getByTestId('DescTest'), { target: { value: mockLocationForm.Description } });
    //fireEvent.change(screen.getByTestId('uploadPhoto'), { target: { value: mockLocationForm.Photos } });


    // Trigger form submission
    fireEvent.click(screen.getByText('AddLocationForm.submit'));

    // Wait for the async operation to complete
    await waitFor(() => {
      // Assert that axios.post was called with the correct data and URL
      expect(axios.post).toHaveBeenCalledWith('/api/upload/', mockLocationForm);
  
  });
})

  it('should display sorry message on failed validation', async () => {
    const mockLocationForm = {
      Lat: 'invalid',
      Lon: 'invalid',
      City: 'invalid',
      Description: 'invalid',
      Photos: [null],

    };

    render(
        <QueryClientProvider client={queryClient}>
          <Uploading />
        </QueryClientProvider>
      );

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