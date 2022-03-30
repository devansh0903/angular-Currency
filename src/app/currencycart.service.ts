import { Injectable } from '@angular/core';
import {Currency} from './currency';
@Injectable()
export class CurrencycartService {

  currency: Currency[] = [];
  constructor() { }

  addToCart(currency: Currency) {
    this.currency.push(currency);
  }

  getItems() {
    return this.currency;
  }

  clearCart() {
    this.currency = [];
    return this.currency;
  }
/* . . . */
}

