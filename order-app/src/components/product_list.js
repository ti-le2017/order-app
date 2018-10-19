import React from 'react';
import './product_list.css';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import direWolf from '../assets/direWolf1.png';

const ProductList = (props) => {

	let row1Count = 0;
	let row2Count = 0;
	let row3Count = 0;
	let row1;
	let row2;
	let row3;
	const books = props.products.items;

	if(!books){
		console.log('loading...')
	} else {
		row1 = books.map((book, k) => {
			row1Count++
			if(row1Count <= 3){

				return (
		      <Card key={k}>
		        <CardImg top src={direWolf} alt="DireWolf card image" />
		        <CardBody>
		          <CardTitle>{book.name}</CardTitle>
		          <CardSubtitle>{book.description}</CardSubtitle>
		          <CardText>{book.price}</CardText>
		          <Button>Button</Button>
		        </CardBody>
		      </Card>	
				)

			}
			return null;
		});

		row2 = books.map((book, k) => {
			row2Count++
			if(row2Count > 3 && row2Count <= 6){

				return (
		      <Card key={k}>
		        <CardImg top src={direWolf} alt="DireWolf card image" />
		        <CardBody>
		          <CardTitle>{book.name}</CardTitle>
		          <CardSubtitle>{book.description}</CardSubtitle>
		          <CardText>{book.price}</CardText>
		          <Button>Button</Button>
		        </CardBody>
		      </Card>	
				)

			}
			return;
		});

		row3 = books.map((book, k) => {
			row3Count++
			if(row3Count > 3 && row3Count <= 6){

				return (
		      <Card key={k}>
		        <CardImg top src={direWolf} alt="DireWolf card image" />
		        <CardBody>
		          <CardTitle>{book.name}</CardTitle>
		          <CardSubtitle>{book.description}</CardSubtitle>
		          <CardText>{book.price}</CardText>
		          <Button>Button</Button>
		        </CardBody>
		      </Card>	
				)

			}
			return;
		});
	}

  return (
  	<div>

	  	<div className='row'>
	  		<div className='col-4'>
			  </div>
			  <div className='col-8'>
			    <CardDeck>
			    	{row1}
			    </CardDeck>
			  </div>
	    </div>

	  	<div className='row'>
	  		<div className='col-4'>
			  </div>
			  <div className='col-8'>
			    <CardDeck>
			    	{row2}
			    </CardDeck>
			  </div>
	    </div>

	  	<div className='row'>
	  		<div className='col-4'>
			  </div>
			  <div className='col-8'>
			    <CardDeck>
			    	{row3}
			    </CardDeck>
			  </div>
	    </div>

    </div>
  );


}
export default ProductList;



