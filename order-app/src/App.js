import React, { Component } from 'react';
import './App.css';

import Purchase from './components/purchase_page.js';
import PageHeader from './components/page_header.js';
import ProductList from './components/product_list.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      books: [],
    }
  }

  componentDidMount(){
    this.itemsFetch();
  }

  itemsFetch(){
    fetch('http://jst.edchavez.com/api/inventory/getInventory/')
    .then(results => { return results.json() })
    .then(data => { this.setState({books: data}) })
  }

  render () {
    return (
      <div className='container'>
        <PageHeader />
        <div>
          <Purchase />
          <ProductList products={this.state.books} />
        </div>
      </div>
    );
  }
}

export default App;
