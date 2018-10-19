import React, {Component} from 'react';
import './purchase_page.css';
import PromoMenu from './promo_menu.js';

class Purchase extends Component {
	constructor(props){
		super(props);

		this.state = {
			promos: []

		}
	}


  componentDidMount(){
    this.promosFetch();
  }

  promosFetch(){
    fetch('http://jst.edchavez.com/api/promo/')
    .then(results => { return results.json() })
    .then(data => { this.setState({promos: data}) })
  }

	render () {
		return (
			<div className='col-4 left-side'>
				<PromoMenu promotion={this.state.promos} /> 
			</div>
		)
	}
}

export default Purchase;