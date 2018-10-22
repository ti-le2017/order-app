import React, { Component } from 'react';
import './App.css';
import './components/css/fonts.css';

import Purchase from './components/purchase_page.js';
import PageHeader from './components/page_header.js';
import ProductList from './components/product_list.js';
import NavMenu from './components/nav.js';
import Breadcrumb from './components/breadcrumb.js';
import Footer from './components/footer.js';

class App extends Component {
  constructor(props){
    super(props);


    this.state = {
      books: [],
      selectedItem: []
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

    // Append selected item to the current state array
    const handleValueChange = (value) => {
      this.setState({ selectedItem: [...this.state.selectedItem, value]})}

    return (
      <div className='container'>
        <NavMenu />
        <div>
          <PageHeader />
          <Breadcrumb />
          <ProductList
            onItemSelect={item=> handleValueChange(item)}
            products={this.state.books}
          />
          <Purchase inCart={this.state.selectedItem} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
