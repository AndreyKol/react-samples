require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Currency from './Currency';
import CurrencyStore from '../stores/CurrencyStore';

class AppComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currencies: CurrencyStore.getAll()
    }
    CurrencyStore.on('change', this.currenciesUpdated.bind(this));
  }

  currenciesUpdated(){
    this.setState({
      currencies: CurrencyStore.getAll()
    });
  }

  render() {
    return (
      <div className="index">
        <Currency currencies = {this.state.currencies}/>
      </div>
    );
  }
}

AppComponent.defaultProps = {

};

export default AppComponent;
