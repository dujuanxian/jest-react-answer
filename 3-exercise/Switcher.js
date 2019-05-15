import React from 'react';

class Switcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button type="button" data-testid="switch-button" onClick={this.handleClick}>
        {this.state.isToggleOn ? '开' : '关'}
      </button>
    );
  }
}

export default Switcher;
