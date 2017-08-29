import {Component} from '@angular/core';
import {connect} from '../connect.service';
@Component({
    selector:'app-register',
    templateUrl:'./registration.component.html',
    styleUrls:['./registration.component.css'],
    providers:[connect]
})

export class registration{
    constructor(private service:connect){
        

    }
    submit(f){
        console.log(f);
        let data=f.value;
        this.service.postdata(data);
    }

}