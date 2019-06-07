import { Injectable } from "@angular/core";
import { ApiService } from './shared/api.service';
import { LocalStorageService } from './shared/local-storage.service';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

    constructor(public api: ApiService, public storage: LocalStorageService, public router: Router){}

    getById(request: any){
        return this.api.post('api/users/getById', request);
    }
}