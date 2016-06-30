require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Currency from './Currency';



var currencies = [
  {currencyPair: 'EUR/USD', rate: 1.11},
  {currencyPair: 'USD/JPY', rate: 111.28},
  {currencyPair: 'GBP/USD', rate: 1.46}
];

class AppComponent extends React.Component {
  render() {
    return (
     <Currency currencies={currencies}/>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
