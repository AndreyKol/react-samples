/**
 * Created by akolodnitskiy on 5/30/16.
 */
import React from 'react';

class CurrencyRow extends React.Component{
  render(){
    return(
      <tr>
        <td>
          {this.props.currency.currencyPair}
        </td>
        <td>
          {this.props.currency.rate}
        </td>
      </tr>
    )
  }
}

export default CurrencyRow;
