import { Injectable } from "@angular/core";
import { ApiService } from './shared/api.service';

@Injectable()
export class VideoService {

    constructor(public api: ApiService){}

    getIntroductionVideos(){
        return this.api.get('api/landing/intro');
    }

    getVideosByCategories(){
        return this.api.get('api/home');
    }

    getCollectionVideos(){
        return this.api.get('api/collection/all');
    }

    getCollectionById(collectionId: number){
        return this.api.get(`api/collection/videos/${collectionId}`);
    }
}