import React, { Component } from 'react';
import data from './data.json'
import SearchBar from './components/SearchBar'
import ProductTable from './components/ProductTable'
import ProductRow from './components/ProductRow'
// import FilterableProductTable from './components/FilterableProductTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Iron Store</h1>
          <SearchBar />
          <ProductRow />
        {/* <FilterableProductTable products={ data } /> */}
        
      </div>
    );
  }
}

export default App;