import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Switcher from '../Switcher';

afterEach(cleanup);

test('Switcher组件通过点击按钮显示开／关', () => {
  // <--start
  // TODO 4: 给出正确的测试
  const { getByTestId } = render(<Switcher />);
  const button = getByTestId('switch-button');

  expect(button).toHaveTextContent('开');
  fireEvent.click(button);
  expect(button).toHaveTextContent('关');
  // --end->
});
