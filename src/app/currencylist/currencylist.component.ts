import { Component, OnInit } from '@angular/core';
import {currency} from '../currency';
@Component({
  selector: 'app-currencylist',
  templateUrl: './currencylist.component.html',
  styleUrls: ['./currencylist.component.css']
})
export class CurrencylistComponent implements OnInit {

  constructor() { }
  ngOnInit() {}
  currency = currency;
  Share(){
    window.alert("Currency pair has been shared");
  }
  onNotify(){
    window.alert("Currency pair will be notified");
  }

}