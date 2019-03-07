import React, { Component } from 'react';
import data from './data.json'

class ProductTable extends Component {

  state = {
    data: data,
  }

    render() {
      return (
        <div className="product-table">
          <table>

          </table>
        </div>
      )
    }
}
export default ProductTable;