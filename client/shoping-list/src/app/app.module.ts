import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import {FormsModule} from '@angular/forms';

import { Http, Response, RequestOptions, Headers } from '@angular/http';


import { AppComponent } from './app.component';
import { ShopingItemComponent } from './shoping-item/shoping-item.component';
import { LoginComponent } from './login/login.component';

import { RouterModule, Routes } from '@angular/router';
import { routingModule } from './app.routing'
import {SignupComponent} from   '../app/signup/signup.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup',      component: SignupComponent },

  { path: 'item',      component: ShopingItemComponent },
 
  { path: '**', component:LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ShopingItemComponent,
    LoginComponent,
    SignupComponent
      ],
  imports: [
    BrowserModule,
    FormsModule,routingModule
    ,
    // HttpClientModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
