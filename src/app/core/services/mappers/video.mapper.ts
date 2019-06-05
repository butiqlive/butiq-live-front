import { Video } from "../../../shared/models/video.model";

export class VideoMapper{
    static mapFromBe(be): Video{
        return new Video({
            id: be.id,
            title: be.title,
            description: be.description,
            previewImage: be.previewImage,
            vimeoId: be.vimeoId
        });
    }

    static mapToBe(video: Video){
        return {
            id: video.id,
            title: video.title,
            description: video.description,
            previewImage: video.previewImage,
            vimeoId: video.vimeoId
        }
    }
}