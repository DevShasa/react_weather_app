import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorCard from './errorCard'; 

describe('ErrorCard', () => {
  it('renders error message correctly', () => {
    render(<ErrorCard />);
    const errorMessage = screen.getByText('Something went wrong fetching the results, kindly try reloading the page');
    expect(errorMessage).toBeInTheDocument();
  });
});