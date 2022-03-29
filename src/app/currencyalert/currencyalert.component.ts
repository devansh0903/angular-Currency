import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Currency} from '../currency';
@Component({
  selector: 'app-currencyalert',
  templateUrl: './currencyalert.component.html',
  styleUrls: ['./currencyalert.component.css']
})
export class CurrencyalertComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {}
  @Input() currency!: Currency;
  @Output() notify =  new EventEmitter(); 
  


}