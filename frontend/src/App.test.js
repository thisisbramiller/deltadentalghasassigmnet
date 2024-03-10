import { render, screen } from '@testing-library/react';
import App from './App';

test('renders sorriso link', () => {
  render(<App />);
  const linkElement = screen.getByText(/sorriso/i);
  expect(linkElement).toBeInTheDocument();
});
