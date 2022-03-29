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

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule,
  RouterModule.forRoot([
    { path : '', component: CurrencylistComponent},
    {path : 'currency/:currencyId', component: CurrencydetailsComponent}
])],
  declarations: [ AppComponent,CurrencylistComponent,CurrencydetailsComponent, CurrencyalertComponent,TopBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
