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

}