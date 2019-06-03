import { Injectable } from "@angular/core";
import { ApiService } from './shared/api.service';
import { JwtService } from './shared/jwt.service';
import { LocalStorageService } from './shared/local-storage.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    constructor(public api: ApiService, public jwt: JwtService, 
        public storage: LocalStorageService, public router: Router){
    }

    signup(request: any){
        return this.api.post('auth/signup', request);
    }

    login(email :string, password: string){
        
    }

    logout(){
        this.storage.clear();
        this.router.navigateByUrl('/auth');
    }

}