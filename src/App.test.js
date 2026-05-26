import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

global.fetchAPI = jest.fn(() => [
  '17:00',
  '18:00',
  '19:00'
]);

global.submitAPI = jest.fn(() => true);

test('renders Little Lemon text', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const textElement = screen.getByText(/Little Lemon Chicago/i);

  expect(textElement).toBeInTheDocument();
});