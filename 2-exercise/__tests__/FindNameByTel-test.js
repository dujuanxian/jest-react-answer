import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import FindNameByTel from '../FindNameByTel';

const setup = () => {
  const { getByLabelText, getByTestId } = render(<FindNameByTel />);
  const input = getByLabelText('tel');
  const name = getByTestId('name');
  return {
    input,
    name
  };
};

afterEach(cleanup);

test('FindNameByTel组件通过输入手机号渲染姓名', () => {
  const { input, name } = setup();

  // <--start
  // TODO 3: 给出正确的simulate和assertion
  fireEvent.change(input, { target: { value: '15000000000' } });
  expect(name).toHaveTextContent('Tom');
  // --end->
});
