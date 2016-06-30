/**
 * Created by akolodnitskiy on 5/30/16.
 */
import React from 'react';

class CurrencyHeader extends React.Component{
  render(){
    return(
      <thead>
      <tr>
        <td>
          Currency
        </td>
        <td>
          Rate
        </td>
      </tr>
      </thead>
    )
  }

}

export default CurrencyHeader;
