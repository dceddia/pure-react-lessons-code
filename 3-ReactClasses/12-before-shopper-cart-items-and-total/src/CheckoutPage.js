import React from 'react';

class CheckoutPage extends React.Component {
  render() {
    const { items = [] } = this.props;

    return (
      <div>Buy {items && items.length} items!</div>
    );
  }
}

export default CheckoutPage;
