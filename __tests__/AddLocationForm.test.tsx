import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddLocationForm from '@/components/AddLocationForm';

const mockOnSubmit = jest.fn();

const renderForm = (props = {}) => {
  render(<AddLocationForm onSubmit={mockOnSubmit} {...props} />);
};

test('renders AddLocationForm with default values', () => {
  renderForm();

  // You can add more specific queries based on your form structure
  expect(screen.getByTestId('LatTest')).toBeInTheDocument();
  expect(screen.getByTestId('LonTest')).toBeInTheDocument();
  expect(screen.getByTestId('CityTest')).toBeInTheDocument();
  expect(screen.getByTestId('DescTest')).toBeInTheDocument();
  expect(screen.getByTestId('uploadPhoto')).toBeInTheDocument();
});