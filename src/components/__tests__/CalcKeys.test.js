import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CalcKeys from '../CalcKeys';

test('Sould render CalcKeys Component', () => {
  render(<CalcKeys />);
  const CalcKeysTBodyElement = screen.getByTestId('CalcKeysTBody');
  expect(CalcKeysTBodyElement).toBeInTheDocument();
  expect(CalcKeysTBodyElement).toHaveTextContent('AC');

  const tree = renderer.create(<CalcKeys />).toJSON();
  expect(tree).toMatchSnapshot();
});
