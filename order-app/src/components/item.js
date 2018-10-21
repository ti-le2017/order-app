import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';
import direWolf from '../assets/direWolf1.png';

const Item = ({item}) => {
  console.log(item)
  return (
    <Card>
      <CardImg top src={direWolf} alt="DireWolf card image" />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        <CardSubtitle>{item.description}</CardSubtitle>
        <CardText>{item.price}</CardText>
        <Button outline color='secondary'>Add to Cart</Button>
      </CardBody>
    </Card>
  );
}

export default Item;
