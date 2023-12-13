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

describe('Index component', () => {
  it('displays admin messages for admin users', () => {
    const mockMap = {
      Map: [
        { _id: 1, Lat: 12.34, Lon: 56.78, City: 'City 1', Description: 'Description 1' },
      ],
    };

    const mockSessionAdmin = {
      user: {
        name: 'AdminUser',
        role: 'admin',
      },
    };

    render(<Index Map={mockMap} sess={mockSessionAdmin} />);

    expect(screen.getByText('Welcome Admin')).toBeInTheDocument();

    const deleteButtons = screen.getAllByTestId('deleteButton');
    expect(deleteButtons).toHaveLength(mockMap.Map.length);
  });

  it('displays user messages for user users', () => {
    const mockSessionUser = {
      user: {
        name: 'RegularUser',
        role: 'user',
      },
    };

    render(<Index Map={{ Map: [] }} sess={mockSessionUser} />);

    expect(screen.getByText('Now that you have logged in, you can use the upload function of our website so share your favorite places around the world!')).toBeInTheDocument();

    expect(screen.getByText('Simply go to the map and give permission to share your location, our website then will show you the latitude and longitude.')).toBeInTheDocument();
    expect(screen.getByText('Once you copy them, you can click the Upload button and paste them there along with any information and a great picture you can share!!')).toBeInTheDocument();
  });

  it('displays a message for non-logged-in users', () => {
    render(<Index Map={{ Map: [] }} sess={null} />);

    expect(screen.getByText('Please Log in using the Header')).toBeInTheDocument();
  });




});

