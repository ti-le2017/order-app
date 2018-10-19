import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import PageHeader from './components/page-header.js';

import ProductList from './components/product_list.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      books: []
    }
  }

  componentDidMount(){
    fetch('http://jst.edchavez.com/api/inventory/getInventory/')
    .then(results => { return results.json() })
    .then(data => { this.setState({books: data}) })
  }

  

  render () {
    return (
      <div className='container'>
        <PageHeader />
        <ProductList products={this.state.books} />
      </div>
    );
  }
}

export default App;
