import { Injectable } from "@angular/core";
import { ApiService } from './shared/api.service';

@Injectable()
export class VideoService {

    constructor(public api: ApiService){}

    getVideosByCategories(){
        return this.api.get('api/home');
    }
    
}