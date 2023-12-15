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

    expect(screen.getByText('Now that you have logged in, here is what you can expect from each page of this website!')).toBeInTheDocument();

    expect(screen.getByText('The Home Page is simply a way for you to read up and get accustumed to the website! It will offer documentation and the general usage.')).toBeInTheDocument();
    expect(screen.getByText('The Map page is your way of looking up all the locations that were posted around the world, and should you accept you share your location, the map will center on you and show you the latitude and longitude so you can copy them and upload your own location!')).toBeInTheDocument();
    
  expect(screen.getByText('The Upload page is where you can upload a location yourself! With the latitude and longitude you got from the map or searched online, you can write the city name, a description, and give us a nice picture from your phone or browser, and all you have to do is click sumbit! This will send the location to our database, and allow the map to read it so other users can have a look at what you posted!')).toBeInTheDocument();
}); 

  it('displays a message for non-logged-in users', () => {
    render(<Index Map={{ Map: [] }} sess={null} />);

    expect(screen.getByText('Please Log in using the Header')).toBeInTheDocument();
  });




});

