import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../Home';

test('Sould render Home Component', () => {
  render(<Home />);
  const HomeElement = screen.getByTestId('Home');
  expect(HomeElement).toBeInTheDocument();
  expect(HomeElement).toHaveTextContent('need of a quick calculation');

  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
