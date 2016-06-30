/**
 * Created by akolodnitskiy on 5/30/16.
 */

import Dispatcher from '../dispatcher/AppDispatcher';

class CurrencyActions {
  addCurrency(currency){
    Dispatcher.dispatch({
      actionType: 'addCurrency',
      currency: currency
    });
  }
  deleteCurrency(currency){
    Dispatcher.dispatch({
      actionType: 'deleteCurrency',
      currency: currency
    });
  }
}

export default CurrencyActions;
