import { Component, OnInit } from '@angular/core';
import { CurrencycartService } from '../currencycart.service';

@Component({
  selector: 'app-curcart',
  templateUrl: './curcart.component.html',
  styleUrls: ['./curcart.component.css']
})
export class CurcartComponent implements OnInit {

  constructor(private cartService: CurrencycartService) { }
  currency = this.cartService.getItems();

  ngOnInit() {
  }

}