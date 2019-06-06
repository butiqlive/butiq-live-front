import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/core/services/video.service';
import { NotificationUtil } from 'src/app/core/utils/notification.util';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  public videosByCategory: any;

  constructor(private videoService: VideoService, private notification: NotificationUtil) { }

  getVideos(){
    this.videoService.getVideosByCategories()
      .subscribe(
        (response: any)=>{
          this.videosByCategory = response.data;
        },
        (error: any)=>{
          this.notification.error(error.message, 'Hubo un problema');
        }
      );
  }

  ngOnInit() {
    this.getVideos();
  }

}
