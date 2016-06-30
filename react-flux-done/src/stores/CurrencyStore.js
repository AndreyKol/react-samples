/**
 * Created by akolodnitskiy on 5/30/16.
 */

import Dispatcher from '../dispatcher/AppDispatcher';
import Emitter from 'es6-event-emitter';

var currencies = [
  { currencyPair: 'EUR/USD', rate: 1.13},
  { currencyPair: 'EUR/JPY', rate: 108.13}
];

class CurrencyStore extends Emitter {
  addCurrency(currency){
    currencies.push(currency);

    this.trigger('change');
  }

  deleteCurrency(currency){
    let itemIndex = currencies.indexOf(currency);
    if(itemIndex != -1) currencies.splice(itemIndex, 1);

    this.trigger('change');
  }

  getAll(){
    return currencies;
  }
}

var currencyStore = new CurrencyStore();

Dispatcher.register(function(action){
  switch (action.actionType){
    case 'addCurrency':
      currencyStore.addCurrency(action.currency);
      break;
    case 'deleteCurrency':
      currencyStore.deleteCurrency(action.currency);
      break;
  }
});


export default currencyStore;
