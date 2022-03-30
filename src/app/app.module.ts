import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { CurrencylistComponent } from './currencylist/currencylist.component';
import { CurrencydetailsComponent } from './currencydetails/currencydetails.component';
import { CurrencyalertComponent } from './currencyalert/currencyalert.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CurcartComponent } from './curcart/curcart.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule,
  RouterModule.forRoot([
    { path : '', component: CurrencylistComponent},
    {path : 'currency/:currencyId', component: CurrencydetailsComponent},
    {path : 'curcart', component: CurcartComponent}
])],
  declarations: [ AppComponent,CurrencylistComponent,CurrencydetailsComponent, CurrencyalertComponent,TopBarComponent,CurcartComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
