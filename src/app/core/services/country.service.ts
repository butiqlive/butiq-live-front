import { Injectable } from "@angular/core";
import { ApiService } from './shared/api.service';

@Injectable()
export class CountryService {

    constructor(public api: ApiService){}

    getAll(){
        return this.api.get('api/country/all');
    }


}