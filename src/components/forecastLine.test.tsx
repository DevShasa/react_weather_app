import React from 'react';
import { render, screen } from '@testing-library/react';
import ForecastLine from './forecastLine'; 
describe('ForecastLine', () => {
  const props = {
    iconName: 'cloudy',
    temperature: 25, 
    date: '2024-05-01', 
    day: 'Monday' 
  };

  it('renders with correct props', () => {
    render(<ForecastLine {...props} />);
    
    const icon = screen.getByAltText('Overcast Clouds');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('src', './assets/images/weather_icons/cloudy.png');

    const date = screen.getByText('2024-05-01');
    expect(date).toBeInTheDocument();

    const day = screen.getByText('Monday');
    expect(day).toBeInTheDocument();
  });
});
