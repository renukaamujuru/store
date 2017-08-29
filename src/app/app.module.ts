import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routes} from './app.router';
import { AppComponent } from './app.component';
import {header} from './header/header.component';
import {connect} from './connect.service'


import 'hammerjs';
import {login} from './login/login.component';
import {registration} from './registration/registration.component';
import {home} from './home/home.component';
import {contactUs} from './contactUs/contactUs.component';
import { forgotPassword } from './forgotPassword/forgotPassword.component';
import {ourStrategy} from './aboutus/ourStrategy.component';
import {ourApproach} from './aboutus/ourApproach.component';

@NgModule({
  declarations: [
    AppComponent,header,login,registration,home,contactUs,forgotPassword,ourStrategy,ourApproach
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
