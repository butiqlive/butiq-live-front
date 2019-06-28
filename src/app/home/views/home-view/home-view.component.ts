import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/core/services/video.service';
import { NotificationUtil } from 'src/app/core/utils/notification.util';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  public videosByCategory: any;

  constructor(private videoService: VideoService, private notification: NotificationUtil,
    private authService: AuthService) { }

  getVideos(){
    this.videoService.getVideosByCategories()
      .subscribe(
        (response: any)=>{
          this.videosByCategory = response.data;
        },
        (error: HttpErrorResponse) => {
          if(error.error.data){
            if(this.authService.isTokenValid(error.error.data.error)){
              this.notification.error(error.error.data.msg, 'Algo malo pasó');
            }
          } else{
            this.notification.error(error.message , 'Algo malo pasó');
          }
        }
      );
  }

  ngOnInit() {
    this.getVideos();
  }

}
