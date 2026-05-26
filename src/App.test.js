import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders Little Lemon text', () => {

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const textElement = screen.getByText(/Fresh Mediterranean food/i);

  expect(textElement).toBeInTheDocument();

});