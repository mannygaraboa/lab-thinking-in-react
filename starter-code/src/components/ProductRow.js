import React, { Component } from 'react';
import data from './data.json'

class ProductRow extends Component {

  state = {
    data: data,
  }

  makeALoop = () => 
  {
    let list = this.state.data.map((oneData, index) => {
      return(
        <div key={index} className="data-info">
          <li className="data-name">{oneData.name}</li>
          <li className="data-price">{oneData.price}</li>
        </div>
      )
    })
    return list;
  }
}
export default ProductRow;