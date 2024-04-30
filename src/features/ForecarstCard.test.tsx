import { render, screen } from '@testing-library/react';
import ForecastCard from './ForecastCard'; 

describe('ForecastCard', () => {
  const forecastData = {
    list: [
      {
        weather: [
          {
            icon: 'cloudy'
          }
        ],
        dt_txt: '2024-05-01 12:00:00',
        main: {
          temp_max: 298 
        }
      },
    ]
  };

  it('renders forecast lines correctly', () => {
    // @ts-ignore
    render(<ForecastCard forecast={forecastData} title="Forecast" />);
    
    const title = screen.getByText('Forecast');
    expect(title).toBeInTheDocument();

  });

  it('renders loading skeleton card when forecast is null', () => {
    render(<ForecastCard forecast={null} title="Forecast" />);
    
    const loadingSkeletonCard = screen.getByTestId('loading-skeleton-card');
    expect(loadingSkeletonCard).toBeInTheDocument();
  });
});
