import { Injectable } from "@angular/core";
import { ApiService } from './shared/api.service';


@Injectable()
export class VimeoService {

    constructor(public api: ApiService){}

    postPlayback(request: any){
        return this.api.post('api/vimeo/playback', request);
    }


}