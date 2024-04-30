import { render, screen } from '@testing-library/react';
import HiglightCard from './higlightCard'; 
describe('HiglightCard', () => {
  const props = {
    title: 'Temperature',
    iconName: 'thermometer',
    figure: '25',
    subscript: '°C'
  };

  it('renders with correct props', () => {
    render(<HiglightCard {...props} />);
    
    const title = screen.getByText('Temperature');
    expect(title).toBeInTheDocument();

    const iconName = screen.getByText('thermometer');
    expect(iconName).toBeInTheDocument();
  });
});
