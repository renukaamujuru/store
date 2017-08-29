import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {home} from './home/home.component';
import {header} from './header/header.component';
import {contactUs} from './contactUs/contactUs.component';
import {login} from './login/login.component';
import {registration} from './registration/registration.component';
import {forgotPassword} from './forgotPassword/forgotPassword.component';
import {ourStrategy} from './aboutus/ourStrategy.component';
import {ourApproach} from './aboutus/ourApproach.component';

export const router:Routes=[
   
    {path:"registration/login",component:login},
    {path:"aboutus/ourStrategy",component:ourStrategy},
    {path:"aboutus/ourApproach",component:ourApproach},
    {path:"login/forgotPassword",component:forgotPassword},
    {path:"registration/login/forgotPassword",component:forgotPassword},
    {path:"forgotPassword",component:forgotPassword},
    {path:"home",component:home},
    {path:"contactUs",component:contactUs},
    {path:"login",component:login},
    {path:"registration",component:registration},
    {path:"",redirectTo:'home',pathMatch:'full'}
];
    export const routes:ModuleWithProviders=RouterModule.forRoot(router);