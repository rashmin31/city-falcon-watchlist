import { render, screen } from '@testing-library/react';
import Layout from '../Layout';

test('renders Watchlist', () => {
  render(<Layout />);
  const element = screen.getByTestId('layout');
  expect(element).toBeInTheDocument();

  const container = document.querySelector('#layout');
  
});
