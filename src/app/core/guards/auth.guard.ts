import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { JwtService } from '../services/shared/jwt.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private jwt: JwtService, private router: Router){}

    canActivate(): boolean{
        let token = this.jwt.getToken();
        if(token){
            return true;
        }else{
            this.router.navigateByUrl('/');
        }
    }

}