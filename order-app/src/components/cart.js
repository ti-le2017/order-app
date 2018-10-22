import React, {Component} from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

class Cart extends Component{
  constructor(props){
    super(props);

    this.state = {
      itemCount: []
    }
  }

  render(){
    let cartItem = this.props.inCart.map((item, index) => {
      if(!item.inStock){
        return (
          <h1>out of stock</h1>
        );
      } else {
        return (
          <Card body key='index'>
            <CardTitle>{item.name}</CardTitle>
            <CardText>${item.price}</CardText>
            <Button outline color='secondary'>Quantity</Button>
          </Card>
        );
      }
    });
    return (
      <div>
        <h1>Cart</h1>
        {cartItem}
      </div>

    );
  }
}
export default Cart;
