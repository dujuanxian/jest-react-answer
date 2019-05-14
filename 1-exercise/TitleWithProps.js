import React from 'react';

class TitleWithProps extends React.Component {
  render() {
    const { name } = this.props;
    return <h1 data-testid="title">Hello {name}</h1>;
  }
}

export default TitleWithProps;
