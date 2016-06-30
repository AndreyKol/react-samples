/**
 * Created by akolodnitskiy on 5/30/16.
 */

import React from 'react';
import CurrencyActions from '../actions/CurrencyActions';


class CurrencyRow extends React.Component{
  deleteCurrency(){
    let actions = new CurrencyActions();
    actions.deleteCurrency(this.props.currency);
  }
  render(){
    return (
      <tr>
        <td>
          {this.props.currency.currencyPair}
        </td>
        <td cssStyle="text-align:right">
          {this.props.currency.rate}
        </td>
        <td>
          <button onClick={this.deleteCurrency.bind(this)}>
            Delete
            </button>
        </td>
      </tr>
    );
  }
}

export default CurrencyRow;
