import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {home} from './home/home.component';
import {header} from './header/header.component';
import {footer} from './footer/footer.component';
import {contactUs} from './header/contactUs/contactUs.component';
import {login} from './header/login/login.component';
import {registration} from './header/registration/registration.component';
export const router:Routes=[
    {path:"registration/login",component:login},
    {path:"home",component:home},
     {path:"contactUs",component:contactUs},
      {path:"footer",component:footer},
       {path:"login",component:login},
        {path:"registration",component:registration},
        {path:"",redirectTo:'home',pathMatch:'full'}
];
    export const routes:ModuleWithProviders=RouterModule.forRoot(router);