import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Badminton events for week \d+/i);
  expect(linkElement).toBeInTheDocument();
});
