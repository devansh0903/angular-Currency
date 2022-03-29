import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Currency, currency} from '../currency';

@Component({
  selector: 'app-currencydetails',
  templateUrl: './currencydetails.component.html',
  styleUrls: ['./currencydetails.component.css']
})
export class CurrencydetailsComponent implements OnInit {

  currency: Currency | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    const routeParams = this.route.snapshot.paramMap;
    const currencyIdFromRoute = Number(routeParams.get('currencyId'));

    this.currency = currency.find(currency => currency.Id === currencyIdFromRoute);
  }

}