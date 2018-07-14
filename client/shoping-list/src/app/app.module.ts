import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import {FormsModule} from '@angular/forms';

import { Http, Response, RequestOptions, Headers } from '@angular/http';


import { AppComponent } from './app.component';
import { ShopingItemComponent } from './shoping-item/shoping-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ShopingItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpClientModule,
    HttpModule
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
