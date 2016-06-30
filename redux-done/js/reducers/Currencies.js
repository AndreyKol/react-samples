/**
 * Created by akolodnitskiy on 5/30/16.
 */
import * as ActionTypes from '../constants/ActionTypes';

let defaultState = {
  currencies: [
    { currencyPair: "EUR/USD", rate: 1.23 }
  ]
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.CURRENCY_ADDED:
      return {...state, currencies: [...state.currencies, action.currency ] };

    case ActionTypes.CURRENCY_DELETED:
          let index = state.currencies.indexOf(action.currency);
          if(index != -1){
            return {...state, currencies: [...state.currencies.slice(0, index),...state.currencies.slice(index + 1)]};
          }
    default:
      return state;
  }
}
