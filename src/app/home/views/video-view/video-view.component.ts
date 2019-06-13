import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VIMEO_URL } from '../../../core/constants/global.constants';
import { VideoService } from 'src/app/core/services/video.service';
import { VimeoService } from 'src/app/core/services/vimeo.service';
import { Subscription } from 'rxjs';
import Player from '@vimeo/player';
import { async } from '@angular/core/testing';

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
 

  constructor(private route: ActivatedRoute, private videoService: VideoService, private vimeoService: VimeoService ) {
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
        (error: any)=>{
          console.log('error => ', error);
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
          (error: any)=>{ console.log('error => ', error);}
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
          (response: any) =>{
          
          },
          (error: any)=>{
            console.log('error => ', error);
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
          (response: any) =>{
          
          },
          (error: any)=>{
            console.log('error => ', error);
          }
        )
      });
    });
  }

  ngOnInit() {
  }
}
