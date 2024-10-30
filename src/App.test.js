import { render, screen } from '@testing-library/react';
import App from './App';

test('renders author quote', () => {
  render(<App />);
  const author = screen.getByText(/Author/i);
  expect(author).toBeInTheDocument();
});
