import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

test('Sould render Calculator Component', () => {
  render(<Calculator />);
  const CalculatorElement = screen.getByTestId('Calculator');
  expect(CalculatorElement).toBeInTheDocument();

  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
