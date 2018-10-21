import React, { Component } from 'react';
import './App.css';
// Web & Custom fonts
import './components/css/fonts.css';

import Purchase from './components/purchase_page.js';
import PageHeader from './components/page_header.js';
import ProductList from './components/product_list.js';
import NavMenu from './components/nav.js';
import Breadcrumb from './components/breadcrumb.js';

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
        <NavMenu />
        <div>
          <PageHeader />
          <Breadcrumb />
          <ProductList products={this.state.books} />
          <Purchase />
        </div>
      </div>
    );
  }
}

export default App;
