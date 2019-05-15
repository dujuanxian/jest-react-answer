import React from 'react';

class FindNameByTel extends React.Component {
  static findName(tel) {
    const CONTACTS = [
      {
        tel: '15000000000',
        name: 'Tom'
      }
    ];
    const contact = CONTACTS.find(item => item.tel === tel);
    return contact ? contact.name : null;
  }

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const tel = e.currentTarget.value;
    const name = FindNameByTel.findName(tel);
    return this.setState({ name });
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <input aria-label="tel" onChange={this.handleClick} />
        <span data-testid="name">{name}</span>
      </div>
    );
  }
}

export default FindNameByTel;
