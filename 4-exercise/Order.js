import React from 'react';
import axios from 'axios';

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      orderStatus: '未完成'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
    axios.get(`/order/${this.state.number}`).then(response => {
      this.setState({ orderStatus: response.data.status });
    });
  }

  handleChange(e) {
    this.setState({ number: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <input
          aria-label="number-input"
          type="text"
          value={this.state.number}
          onChange={this.handleChange}
        />
        <button aria-label="submit-button" type="button" onClick={this.handleSubmit}>
          订单号
        </button>
        <p data-testid="status">{this.state.orderStatus}</p>
      </div>
    );
  }
}

export default Order;
