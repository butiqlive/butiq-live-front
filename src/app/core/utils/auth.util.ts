import { Injectable } from "@angular/core";
import { Router } from '@angular/router';


@Injectable()
export class AuthUtil{
    constructor(private router: Router){}

    redirect(){
        this.router.navigateByUrl('/auth');
    }

}