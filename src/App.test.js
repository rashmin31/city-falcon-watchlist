import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Watchlist', () => {
  render(<App />);
  const element = screen.getByText(/Watchlist Name/i);
  expect(element).toBeInTheDocument();
});
