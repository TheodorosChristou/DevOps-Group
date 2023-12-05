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
  it('should submit the form and redirect on successful validation', async () => {
    const mockLocationForm = {
      Lat: 40.7128,
      Lon: -74.006,
      City: 'New York',
      Description: 'Sample Description',
      Photos: ['photo1.jpg', 'photo2.jpg'],
    };

    // Mock axios.post to resolve with a success response
    //axios.post.mockResolvedValueOnce();
    //APIs tested in Swagger


    render(
        <QueryClientProvider client={queryClient}>
          <Uploading />
        </QueryClientProvider>
      );

    fireEvent.change(screen.getByPlaceholderText('index.lat'), { target: { value: mockLocationForm.Lat } });
    fireEvent.change(screen.getByPlaceholderText('index.lon'), { target: { value: mockLocationForm.Lon } });
    fireEvent.change(screen.getByPlaceholderText('AddLocationForm.city'), { target: { value: mockLocationForm.City } });
    fireEvent.change(screen.getByPlaceholderText('AddLocationForm.description'), { target: { value: mockLocationForm.Description } });
    fireEvent.click(screen.getByTestId('uploadPhoto'));


    // Trigger form submission
    fireEvent.click(screen.getByText('AddLocationForm.submit'));

    // Wait for the async operation to complete
    await waitFor(() => {
      // Assert that axios.post was called with the correct data and URL
      expect(axios.post).toHaveBeenCalledWith('/api/upload/', mockLocationForm);
      // Assert that the redirect function was called with the correct URL
      expect(window.location.href).toBe('/map');
    });
  });

  it('should display sorry message on failed validation', async () => {
    const mockLocationForm = {
      Lat: 'invalid',
      Lon: 'invalid',
      City: 'invalid',
      Description: 'invalid',
      Photos: 'invalid',

    };

    render(
        <QueryClientProvider client={queryClient}>
          <Uploading />
        </QueryClientProvider>
      );

    // Fill in the form with invalid values
    fireEvent.change(screen.getByPlaceholderText('index.lat'), { target: { value: mockLocationForm.Lat } });
    fireEvent.change(screen.getByPlaceholderText('index.lon'), { target: { value: mockLocationForm.Lon } });
    fireEvent.change(screen.getByPlaceholderText('AddLocationForm.city'), { target: { value: mockLocationForm.City } });
    fireEvent.change(screen.getByPlaceholderText('AddLocationForm.description'), { target: { value: mockLocationForm.Description } });
    //fireEvent.click(screen.getByText('AddLocationForm.uploadphoto'), { target: { value: mockLocationForm.Photos } });
    // Trigger form submission
    fireEvent.click(screen.getByText('AddLocationForm.submit'));

    // Wait for the sorry message to be displayed
    await waitFor(() => {
      // Assert that the sorry message is displayed
      expect(screen.getByTestId('sorryMsg')).toBeInTheDocument();
    });
  });
});
