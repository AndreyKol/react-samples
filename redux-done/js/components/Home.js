import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CurrencyActions from '../actions/CurrencyActions';
import styles from '../../css/app.css';
import Currency from './Currency';



class Home extends Component {
  render() {
    const {currencies, title, dispatch} = this.props;

    const actions = bindActionCreators(CurrencyActions, dispatch);

    return (
      <main>
        <Currency currencies={currencies} addAction={actions.addCurrency} deleteAction={actions.deleteCurrency}/>
      </main>
    );
  }
}

export default connect(state => (state.Currencies))(Home)
