import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VIMEO_URL } from '../../../core/constants/global.constants';
import { VideoService } from 'src/app/core/services/video.service';
import { VimeoService } from 'src/app/core/services/vimeo.service';
import { Subscription } from 'rxjs';
import Player from '@vimeo/player';
import { async } from '@angular/core/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationUtil } from 'src/app/core/utils/notification.util';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.scss']
})
export class VideoViewComponent implements OnInit {

  public paramsHandler: Subscription;
  public video: any;
  public videoId: any = 0;
  public vimeoId: any = 0;
  public vimeoURL: string = VIMEO_URL;

  constructor(private route: ActivatedRoute, private videoService: VideoService,
    private vimeoService: VimeoService, private notification: NotificationUtil) {
    this.initRouteParamsListener();
  }

  getVideo(){
    this.vimeoURL += this.vimeoId;
    this.videoService.getVideoById(this.videoId)
      .subscribe(
        (response: any)=>{
          this.video = response.data;
          this.initVimeo();
        },
        (error: HttpErrorResponse) => {
          if(error.error.data){
            this.notification.error(error.error.data.msg, 'Algo malo pasó');
          } else{
            this.notification.error(error.message , 'Algo malo pasó');
          }
        }
      )
  }

  initRouteParamsListener(): void {
    this.paramsHandler = this.route.queryParams
      .subscribe(params => {
        this.videoId = params.id;
        this.vimeoId = params.vimeoId;
        this.getVideo();
      });
  }

  initVimeo(){
    const iframe = document.getElementById(this.vimeoId);
    const player = new Player(iframe);

    player.on('play', () => {
      player.getCurrentTime().then( seconds => {
        this.vimeoService.postPlayback({
          videoId: this.videoId,
          seconds,
          action: 'PLAYED'
        })
        .subscribe(
          (response: any) =>{},
          (error: HttpErrorResponse) => {
            if(error.error.data){
              this.notification.error(error.error.data.msg, 'Algo malo pasó');
            } else{
              this.notification.error(error.message , 'Algo malo pasó');
            }
          }
        )
      });

    });

    player.on('pause', () => {
      player.getCurrentTime().then( seconds =>{
        this.vimeoService.postPlayback({
          videoId: this.videoId,
          seconds,
          action: 'PAUSED'
        })
        .subscribe(
          (response: any) =>{},
          (error: HttpErrorResponse) => {
            if(error.error.data){
              this.notification.error(error.error.data.msg, 'Algo malo pasó');
            } else{
              this.notification.error(error.message , 'Algo malo pasó');
            }
          }
        )
      });
    });

    player.on('ended', () => {
      player.getCurrentTime().then( seconds =>{
        this.vimeoService.postPlayback({
          videoId: this.videoId,
          seconds,
          action: 'ENDED'
        })
        .subscribe(
          (response: any) =>{},
          (error: HttpErrorResponse) => {
            if(error.error.data){
              this.notification.error(error.error.data.msg, 'Algo malo pasó');
            } else{
              this.notification.error(error.message , 'Algo malo pasó');
            }
          }
        )
      });
    });
  }

  ngOnInit() {
  }
}
