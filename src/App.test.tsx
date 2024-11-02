import { render, screen } from '@testing-library/react';

import App from './App';
import { useWakeLock } from './hooks/wake-lock/useWakeLock';
import { useFullScreen } from './hooks/full-screen/useFullScreen';
import { useQuote } from './hooks/quote/useQuote';
import { useAutoRefresh } from './hooks/auto-refresh/useAutoRefresh';

jest.mock('./hooks/wake-lock/useWakeLock', () => ({
  useWakeLock: jest.fn(),
}));
jest.mock('./hooks/full-screen/useFullScreen');
jest.mock('./hooks/auto-refresh/useAutoRefresh');
jest.mock('./hooks/quote/useQuote');

describe('<App />', () => {

  Object.defineProperty(navigator, 'wakeLock', {
    value: {
      request: jest.fn().mockResolvedValue({
        release: jest.fn(),
      }),
    },
  });  

  beforeEach(() => {
    (useFullScreen as jest.Mock).mockReturnValue({ toggleFullScreen: jest.fn() });
    (useWakeLock as jest.Mock).mockImplementation(() => {}); // Mock sem funcionalidade
    (useAutoRefresh as jest.Mock).mockImplementation(() => {}); // Mock sem funcionalidade
  });

  it('should render', () => {
    const quoteData = { quote: 'Test quote', author: 'Test author' };
    (useQuote as jest.Mock).mockReturnValue(quoteData);
    render(<App />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('renders App component correctly', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
