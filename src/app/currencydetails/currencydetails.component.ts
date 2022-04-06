import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Currency, currency} from '../currency';
// import { CurrencycartService } from '../currencycart.service';

@Component({
  selector: 'app-currencydetails',
  templateUrl: './currencydetails.component.html',
  styleUrls: ['./currencydetails.component.css']
})
export class CurrencydetailsComponent implements OnInit {

  currency: Currency | undefined;

  constructor(
    private route: ActivatedRoute,
    // private cartService: CurrencycartService
    ) { }


    // addToCart(currency: Currency) {
    //   this.cartService.addToCart(currency);
    //   window.alert('Your product has been added to the cart!');
    // }

  ngOnInit(){

    const routeParams = this.route.snapshot.paramMap;
    const currencyIdFromRoute = Number(routeParams.get('currencyId'));

    this.currency = currency.find(currency => currency.Id === currencyIdFromRoute);
  }
}

