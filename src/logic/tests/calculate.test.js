import calculate from '../calculate';

it('Should calculate AC', () => {
  const obj = {};
  const button = 'AC';

  expect(calculate(obj, button)).toStrictEqual({
    total: null,
    next: null,
    operation: null,
  });
});
describe('Calculate Number', () => {
  it('Should calculate 0', () => {
    const obj = { next: '0' };
    const button = '0';

    expect(calculate(obj, button)).toStrictEqual({});
  });

  it('Should calculate number case 1', () => {
    const obj = { next: '1', operation: '+' };
    const button = '1';

    expect(calculate(obj, button)).toStrictEqual({
      next: '11',
      operation: '+',
    });
  });

  it('Should calculate number case 2', () => {
    const obj = { next: '1' };
    const button = '1';

    expect(calculate(obj, button)).toStrictEqual({ next: '11', total: null });
  });

  it('Should calculate number case 3', () => {
    const obj = {};
    const button = '1';

    expect(calculate(obj, button)).toStrictEqual({ next: '1', total: null });
  });
});

describe('Calculate .', () => {
  it('Should calculate button . case 1', () => {
    const obj = { next: '1.' };
    const button = '.';

    expect(calculate(obj, button)).toStrictEqual({ next: '1.' });
  });

  it('Should calculate button . case 2', () => {
    const obj = { next: '1' };
    const button = '.';

    expect(calculate(obj, button)).toStrictEqual({ next: '1.' });
  });

  it('Should calculate button . case 3', () => {
    const obj = { next: '1', operation: '-' };
    const button = '.';

    expect(calculate(obj, button)).toStrictEqual({
      next: '1.',
      operation: '-',
    });
  });

  it('Should calculate button . case 4', () => {
    const obj = { total: '10', operation: '-' };
    const button = '.';

    expect(calculate(obj, button)).toStrictEqual({
      next: '0.',
      operation: '-',
      total: '10',
    });
  });

  it('Should calculate button . case 5', () => {
    const obj = { total: '10.' };
    const button = '.';

    expect(calculate(obj, button)).toStrictEqual({});
  });

  it('Should calculate button . case 6', () => {
    const obj = { total: '10' };
    const button = '.';

    expect(calculate(obj, button)).toStrictEqual({ total: '10', next: '10.' });
  });
});

it('Should calculate button =', () => {
  const obj = { total: '10', next: '1', operation: '+' };
  const button = '=';

  expect(calculate(obj, button)).toStrictEqual({
    total: '11',
    next: null,
    operation: null,
  });
});

describe('Calculate +/-', () => {
  it('Should calculate button +/- case 1', () => {
    const obj = { total: '10', next: '1', operation: '+' };
    const button = '+/-';

    expect(calculate(obj, button)).toStrictEqual({
      total: '10',
      next: '-1',
      operation: '+',
    });
  });

  it('Should calculate button +/- case 2', () => {
    const obj = { total: '10', operation: '+' };
    const button = '+/-';

    expect(calculate(obj, button)).toStrictEqual({
      total: '-10',
      operation: '+',
    });
  });
});
