import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quotes from '../Quotes';

test('Sould render Quotes Component', () => {
  render(<Quotes />);
  const QuoteElement = screen.getByTestId('Quotes');
  expect(QuoteElement).toBeInTheDocument();

  const tree = renderer.create(<Quotes />).toJSON();
  expect(tree).toMatchSnapshot();
});
