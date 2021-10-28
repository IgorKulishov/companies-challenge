import React from 'react';
import { render, screen } from '@testing-library/react';
import CompaniesList from './companies-list';

test('renders learn react link', () => {
  render(<CompaniesList />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
