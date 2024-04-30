import { render, screen } from '@testing-library/react';
import NowCard from './NowCard'; 

describe('NowCard', () => {
  const currentWeatherData = {
    main: {
      temp: 25
    },
    weather: [
      {
        icon: 'cloudy',
        description: 'Overcast Clouds'
      }
    ],
    dt: 1714434729,
    timezone: 10800,
    name: 'City',
    sys: {
      country: 'Country'
    }
  };

  it('renders current weather details correctly', () => {
    // @ts-ignore
     render(<NowCard currentWeather={currentWeatherData} title="Current Weather" />);
    
    const title = screen.getByText('Current Weather');
    expect(title).toBeInTheDocument();


    const weatherIcon = screen.getByAltText('Overcast Clouds');
    expect(weatherIcon).toBeInTheDocument();

    const weatherDescription = screen.getByText('Overcast Clouds');
    expect(weatherDescription).toBeInTheDocument();

    const date = screen.getByText('Tuesday 30, Apr'); 
    expect(date).toBeInTheDocument();

    const location = screen.getByText('City, Country');
    expect(location).toBeInTheDocument();
  });

  it('renders loading skeleton card when currentWeather is null', () => {
    render(<NowCard currentWeather={null} title="Current Weather" />);
    
    const loadingSkeletonCard = screen.getByTestId('loading-skeleton-card');
    expect(loadingSkeletonCard).toBeInTheDocument();
  });
});
