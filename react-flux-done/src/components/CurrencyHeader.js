/**
 * Created by akolodnitskiy on 5/30/16.
 */
import React from 'react';

class CurrencyHeader extends React.Component{

  render(){
    return (
      <thead>
      <tr>
        <td>Currency Pair</td>
        <td>Exchange Rate</td>
        <td>Actions</td>
        </tr>
      </thead>
    );
  }
}

export default CurrencyHeader;
