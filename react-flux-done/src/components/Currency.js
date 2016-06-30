/**
 * Created by akolodnitskiy on 5/30/16.
 */
import React from 'react';
import AddCurrency from './AddCurrency';
import CurrencyHeader from './CurrencyHeader';
import CurrencyRow from './CurrencyRow';


class Currency extends React.Component
{
  render(){

    //usual JS
    return (
      <div>
      <AddCurrency/>
      <table>
        <CurrencyHeader/>
        <tbody>
          {this.props.currencies.map(function(currency){
            return <CurrencyRow key={currency.currencyPair} currency = {currency}/>;
          })}
        </tbody>
      </table>
        </div>
    );
  }
}

export default Currency;
