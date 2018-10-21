import React from 'react';
import { CardDeck } from 'reactstrap';
import './css/product_list.css';
import Item from './item.js';

const ProductList = (props) => {

	const books = props.products.items;
	let productItem;

	if(!books){
		console.log('loading...')
	} else {

		productItem = books.map((item) => {
			return (
				<Item
					key={item.itemId}
					item={item} />
				)
			});
	}

  return (
  	<div className='col-8 right-side'>

	  	<div>
			  <div>
			    <CardDeck className='grid-container'>
						{productItem}
			    </CardDeck>
			  </div>
	    </div>

    </div>
  );


}
export default ProductList;
