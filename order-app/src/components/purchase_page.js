import React, {Component} from 'react';
import './css/purchase_page.css';

import PromoMenu from './promo_menu.js';
import Cart from './cart.js';


class Purchase extends Component {
	constructor(props){
		super(props);

		this.state = {
			promos: [],
			shipping: []

		}
	}


  componentDidMount(){
    this.promosFetch();
		this.shippingFetch();
  }

  promosFetch(){
    fetch('http://jst.edchavez.com/api/promo/')
    .then(results => { return results.json() })
    .then(data => { this.setState({promos: data}) })

  }
	shippingFetch(){
		fetch('http://jst.edchavez.com/api/shipping/')
		.then(results => { return results.json() })
		.then(data => { this.setState({shipping: data}) })

	}

	render () {
		return (
			<div className='col-4 left-side'>
				<Cart />
				<PromoMenu promotion={this.state.promos} />

			</div>

		);
	}
}

export default Purchase;
