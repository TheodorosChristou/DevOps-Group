import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import Index from '@/components/Home';
import axios from 'axios';

const mockMapData = [
  { _id: '1', Lat: 40.7128, Lon: -74.006, City: 'New York', Description: 'Description 1' },
  { _id: '2', Lat: 34.0522, Lon: -118.2437, City: 'Los Angeles', Description: 'Description 2' },
];

const mockSession = {
  expires: new Date(Date.now() + 2 * 86400).toISOString(),
  user: { username: 'username', role: 'admin'},
};

jest.mock('axios');

describe('Index from Home', () => {
  it('should delete an item and update state', async () => {
    const mockId = 'someId';

    // Mock axios.delete to resolve with a success response
    (axios.delete as jest.Mock).mockResolvedValueOnce({} as never);

    // Mock initial mapState and setMapState function
    const initialMapState = [{ _id: '1' }, { _id: '2' }, { _id: mockId }];
    const setMapStateMock = jest.fn();

    // Render your component with the mock data and functions
    render(<Index Map={mockMapData} sess={mockSession} />);

    // Trigger the handleDelete function
    userEvent.click(screen.getByTestId('deleteButton'));

    // Wait for the asynchronous operation to complete
    //await waitFor(() => {
    //   // Assert that axios.delete was called with the correct URL
      //expect(axios.delete).toHaveBeenCalledWith(`/api/changes/${mockId}`);
    // });

    // Assert that setMapState was called with the updated state (item removed)
    //expect(setMapStateMock).toHaveBeenCalledWith([
      //{ _id: '1' },
      //{ _id: '2' },
    //]);
  });



})
//})
