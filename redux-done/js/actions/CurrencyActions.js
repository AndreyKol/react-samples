/**
 * Created by akolodnitskiy on 5/30/16.
 */
import {CURRENCY_ADDED, CURRENCY_DELETED} from '../constants/ActionTypes';

export function addCurrency(currency){
  return {
    type: CURRENCY_ADDED,
    currency: currency
  }
}

export function deleteCurrency(currency){
  return {
    type: CURRENCY_DELETED,
    currency: currency
  }
}
