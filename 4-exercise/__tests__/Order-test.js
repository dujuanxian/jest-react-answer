import React from 'react';
import { cleanup, fireEvent, render, waitForElement } from 'react-testing-library';
import 'jest-dom/extend-expect';
import axios from 'axios';
import Order from '../Order';
import 'babel-polyfill';

jest.mock('axios');

afterEach(cleanup);

test('Order组件显示异步调用订单数据', async () => {
  // <--start
  // TODO 4: 给出正确的测试
  // setup组件
  const { getByLabelText, getByTestId } = render(<Order />);
  const numberInput = getByLabelText('number-input');
  const submitButton = getByLabelText('submit-button');

  // Mock数据请求
  axios.get.mockResolvedValue({
    data: { status: '已完成' }
  });

  // 触发事件
  fireEvent.change(numberInput, { target: { value: '123456' } });
  fireEvent.click(submitButton);

  // 给出断言
  const orderStatus = await waitForElement(() => getByTestId('status'));
  expect(axios.get).toHaveBeenCalledWith('/order/123456'); //
  expect(orderStatus).toHaveTextContent('已完成');
  // --end->
});
