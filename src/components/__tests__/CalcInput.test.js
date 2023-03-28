import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CalcInput from '../CalcInput';

test('Sould render CalcInput Component', () => {
  const testObj = {
    total: 9,
    next: null,
    operation: null,
  };
  render(<CalcInput resObj={testObj} />);
  const calcInputElement = screen.getByTestId('CalcInput');
  expect(calcInputElement).toBeInTheDocument();
  expect(calcInputElement.value).toBe('9');

  const tree = renderer.create(<CalcInput resObj={testObj} />).toJSON();
  expect(tree).toMatchSnapshot();
});
