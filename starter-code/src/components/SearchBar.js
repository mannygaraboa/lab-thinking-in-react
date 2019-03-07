import React, { Component } from 'react';
import data from '../data.json'

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <input type="text" placeholder="Search"></input>
        <br/>
        <input type="checkbox"></input>
          <h3>Only Show Products in stock</h3>
      </div>
    );
  }
} 

export default SearchBar;