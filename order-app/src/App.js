import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

import ProductList from './components/product_list.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      items: []
    }
  }

  componentWillMount(){
    fetch('http://jst.edchavez.com/api/inventory/getInventory/').then(results => {
      return results.json();
    }).then(data => {
      this.setState({items: data});
    })
  }

  

  render () {
    return (
      <div>
        <ProductList products={this.state.items} />
      </div>
    );
  }
}

export default App;



  // const item = props.products.items.map((item) => {
  //   return(
  //     <productItems
  //       key={item.itemId}
  //       item={item}
  //   )
  // });