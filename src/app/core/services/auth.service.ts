import { Injectable } from "@angular/core";
import { ApiService } from './shared/api.service';
import { LocalStorageService } from './shared/local-storage.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    constructor(public api: ApiService, public storage: LocalStorageService, public router: Router){}

    signup(request: any){
        return this.api.post('auth/signup', request);
    }

    login(request: any){
        return this.api.post('auth/login', request);
    }

    logout(){
        this.storage.clear();
        this.router.navigateByUrl('/');
    }

    isTokenValid(message: string){
        if(message && message.indexOf('INVALID TOKEN') > -1) {
            this.logout();
            return false;
        } else {
            return true;
        }
    }

}