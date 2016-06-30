/**
 * Created by akolodnitskiy on 5/30/16.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import CurrencyHeader from './CurrencyHeader';
import CurrencyRow from './CurrencyRow';
import AddCurrency from './AddCurrency';

class Currency extends Component {
  render() {
    let deleteAction = this.props.deleteAction;
    return (
      <div>
        <AddCurrency addAction={this.props.addAction}/>
        <table>
          <CurrencyHeader/>
          <tbody>
            {this.props.currencies.map(function (currency) {
              return <CurrencyRow key={currency.currencyPair} currency={currency} deleteAction={deleteAction}/>
            })}
          </tbody>

        </table>
      </div>
    );
  }
}

export default connect()(Currency);
