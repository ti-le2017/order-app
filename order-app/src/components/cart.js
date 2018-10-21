import React, {Component} from 'react';

class Cart extends Component {
  constructor(props){
    super(props);

    this.state= {
      inCart: []
    }
  }

  render () {
    return (
      <h2>Cart</h2>

    );
  }
}

export default Cart;
