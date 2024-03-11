import { render, screen } from '@testing-library/react';
import App from './App';

test('renders sorriso link', () => {
  render(<App />);
  /**
   * Represents the link element with the text "sorriso".
   * @type {HTMLElement}
   */
  const linkElement = screen.getByText(/sorriso/i);
  expect(linkElement).toBeInTheDocument();
});
