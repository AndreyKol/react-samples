/**
 * Created by akolodnitskiy on 5/30/16.
 */
import React from 'react';
import CurrencyHeader from './CurrencyHeader';
import CurrencyRow from './CurrencyRow';

class Currency extends React.Component{
  render(){
    return(
      <table>
        <CurrencyHeader/>
        {this.props.currencies.map(function(currency){
          return <CurrencyRow currency={currency}/>
        })}
      </table>
    );
  }
}

export  default Currency;
