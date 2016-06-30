/**
 * Created by akolodnitskiy on 5/30/16.
 */
import React from 'react';

import CurrencyActions from '../actions/CurrencyActions';

class AddCurrency extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currencyPair: '',
      rate: ''
    };
  }
  setDefaultState(){
    this.setState ({
      currencyPair: '',
      rate: ''
    });
  }
  _addCurrency(){
    let actions = new CurrencyActions();
    actions.addCurrency({
      currencyPair: this.state.currencyPair,
      rate: this.state.rate
    });

    this.setDefaultState();
  }
  _setCurrencyPair(e){
    this.setState({
      currencyPair: e.target.value
    });
  }
  _setRate(e){
    this.setState({
      rate: e.target.value
    });
  }
  render(){
    let inlineStyle = {
      marginBottom: '10px',
      marginTop: '10px'
    };
    return(
    <div style={inlineStyle}>
      <span>Currency Pair:</span><span><input type="text" value={this.state.currencyPair} onChange={this._setCurrencyPair.bind(this)}/></span>
      <span className="padding-left-10">Currency Rate:</span><span><input value={this.state.rate} onChange={this._setRate.bind(this)} type="text"/></span>
      <button className="inline-button" onClick={this._addCurrency.bind(this)}>Save</button>
    </div>
  );
  }
}

export  default AddCurrency;
