import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routes} from './app.router';
import { AppComponent } from './app.component';
import {header} from './header/header.component';
import {footer} from './footer/footer.component';

import 'hammerjs';
import {login} from './header/login/login.component';
import {registration} from './header/registration/registration.component';
import {home} from './home/home.component';
import {contactUs} from './header/contactUs/contactUs.component';

@NgModule({
  declarations: [
    AppComponent,header,footer,login,registration,home,contactUs
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
