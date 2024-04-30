import React from 'react';
import { render, screen } from '@testing-library/react';
import AirQualityMetric from './airQualityPanel'; // Assuming the component is in a file named AirQualityMetric.tsx

describe('AirQualityMetric', () => {
  const airQualityData = {
    coord: {
        "lon": 90.8518,
        "lat": 23.2513
      },
    list: [
      {
        components: {
          pm2_5: 10,
          o3: 20,
          no2: 30,
          so2: 40
        },
        main: {
          aqi: 2 
        },
        dt: 1714435344

      }
    ]
  };

  it('renders air quality metrics correctly', () => {
   render(<AirQualityMetric airQuality={airQualityData} />);
    expect(screen.getByText('10')).toBeInTheDocument(); 
    expect(screen.getByText('20')).toBeInTheDocument(); 
    expect(screen.getByText('30')).toBeInTheDocument(); 
    expect(screen.getByText('40')).toBeInTheDocument(); 
  });

  it('renders AQI badge', () => {
    render(<AirQualityMetric airQuality={airQualityData} />);
    const aqiBadge = screen.getByText('Fair'); 
    expect(aqiBadge).toBeInTheDocument();
    expect(aqiBadge).toHaveClass('aqi-2'); 
  });
});
