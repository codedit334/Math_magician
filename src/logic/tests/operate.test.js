import operate from '../operate';

it('Should use operation +', () => {
  const num1 = 1;
  const num2 = 1;

  expect(operate(num1, num2, '+')).toStrictEqual('2');
});

it('Should use operation -', () => {
  const num1 = 1;
  const num2 = 1;

  expect(operate(num1, num2, '-')).toStrictEqual('0');
});

it('Should use operation x', () => {
  const num1 = 1;
  const num2 = 1;

  expect(operate(num1, num2, 'x')).toStrictEqual('1');
});

it('Should use operation ÷', () => {
  const num1 = 1;
  const num2 = 1;

  expect(operate(num1, num2, '÷')).toStrictEqual('1');
});

it('Should use operation %', () => {
  const num1 = 2;
  const num2 = 1;

  expect(operate(num1, num2, '%')).toStrictEqual('0');
});
