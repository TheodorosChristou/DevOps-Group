import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import DynamicMap from '@/components/DynamicMap';
import useCloudinary from '@/hooks/useCloudinary';
import { resolve } from 'path';
// Mock the useTranslation hook
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: jest.fn() }),
}));

// Mock the useCloudinary hook
jest.mock('useCloudinary'), () => ({
  __esModule: true,
  default: () => ({ Cloudinary: { image: jest.fn() } }),
});

const mockGeolocation = {
  getCurrentPosition: jest.fn(),
};
const mockMapData = [
    {
      _id: '1',
      Lat: 40.7128,
      Lon: -74.0060,
      City: 'New York',
      Description: 'The Big Apple',
      Photos: ['photo_url_1'],
    },
  ];

beforeEach(() => {
    Object.defineProperty(global.navigator, 'geolocation', {
      value: mockGeolocation,
      writable: true,
    });
  });

afterEach(() => {
  jest.clearAllMocks();
});
test('renders DynamicMap with mock data', () => {
    const { getByText } = render(<DynamicMap mapData={mockMapData} />);
  
    expect(getByText('The Big Apple')).toBeInTheDocument();
  });
test('renders the map component with default location', async () => {
  render(<DynamicMap mapData={[]} />);
  await waitFor(() => {
    expect(screen.getByText('London')).toBeInTheDocument(); 
  });
});

test('renders the map component with user location', async () => {
  // Mock permission to be granted
  global.window.confirm = jest.fn(() => true);

  // Mock geolocation to return a specific position
  mockGeolocation.getCurrentPosition.mockImplementationOnce((success) =>
    success({
      coords: {
        latitude: 51.5072,
        longitude: 0.1276,
      },
    })
  );

  render(<DynamicMap mapData={[]} />);
  await waitFor(() => {
    expect(screen.getByText('User City')).toBeInTheDocument(); 
  });
});

test('renders map markers for each data point', async () => {
  const mapData = [
    { _id: '1', Lat: 51.5072, Lon: 0.1276, City: 'City1', Description: 'Description1', Photos: ['photo1'] },
    { _id: '2', Lat: 52.5072, Lon: 1.1276, City: 'City2', Description: 'Description2', Photos: ['photo2'] },
  ];

  render(<DynamicMap mapData={mapData} />);
  await waitFor(() => {
    expect(screen.getByText('City1 - Description1')).toBeInTheDocument();
    expect(screen.getByText('City2 - Description2')).toBeInTheDocument();
  });
});
