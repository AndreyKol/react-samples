/**
 * Created by akolodnitskiy on 5/30/16.
 */
import React, {Component} from 'react';

class CurrencyRow extends  Component{

  deleteCurrency(){
    this.props.deleteAction(this.props.currency);
  }
  render(){
    return (
      <tr>
      <td>
        {this.props.currency.currencyPair}
      </td>
      <td>
        {this.props.currency.rate}
      </td>
      <td>
        <button onClick={this.deleteCurrency.bind(this)}>Delete</button>
      </td>
    </tr>
    );
  }
}

export default CurrencyRow;
