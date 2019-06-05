import { BaseModel } from "./base/base-model";

export class Video extends BaseModel<Video>{

    public title: string;
    public description: string;
    public previewImage: string;
    public vimeoId : string;
    
}