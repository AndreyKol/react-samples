/**
 * Created by akolodnitskiy on 5/30/16.
 */
import React, {Component} from 'react';


class AddCurrency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyPair: '',
      rate: ''
    };
  }

  setDefaultState() {
    this.setState({
      currencyPair: '',
      rate: ''
    });
  }

  _addCurrency() {
   this.props.addAction({
      currencyPair: this.state.currencyPair,
      rate: this.state.rate
    });

    this.setDefaultState();
  }

  _setCurrencyPair(e) {
    this.setState({
      currencyPair: e.target.value
    });
  }

  _setRate(e) {
    this.setState({
      rate: e.target.value
    });
  }

  render() {
    let inlineStyle = {
      marginBottom: '20px',
      marginTop: '20px',
      color: 'red'
    };

    return (
      <div style={inlineStyle}>
        <span>Currency Pair:</span><span><input type="text" value={this.state.currencyPair}
                                                onChange={this._setCurrencyPair.bind(this)}/></span>
        <span className="padding-left-10">Currency Rate:</span><span><input value={this.state.rate}
                                                                            onChange={this._setRate.bind(this)} type="text"/></span>
        <button className="inline-button" onClick={this._addCurrency.bind(this)}>Save</button>
      </div>
    );
  }
}

export  default AddCurrency;
