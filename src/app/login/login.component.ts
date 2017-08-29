import {Component} from '@angular/core';
import {connect} from '../connect.service';
@Component({
    selector:'app-login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css'],
    providers:[connect]
})

export class login{
    constructor(private service:connect){

    }
    submit(j){
        console.log(j);
        this.service.postLoginData(j.value);

    }
}