import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from '../LoginPage';

test('renders Sign in with Google button', () => {
  const { getByText } = render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  );
  expect(getByText(/Sign in with Google/i)).toBeInTheDocument();
}); 