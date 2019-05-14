import React from 'react';

class TitleWithState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Silent World'
    };
  }

  render() {
    const { name } = this.state;
    return <h1 data-testid="title">Hello {name}</h1>;
  }
}

export default TitleWithState;
