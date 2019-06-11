import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import Player from '@vimeo/player';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.scss']
})
export class VideoViewComponent implements OnInit {

  public paramsHandler: Subscription;
  public vimeoId: any = 0;
  public vimeoURL: string = "https://player.vimeo.com/video/";

  constructor(private route: ActivatedRoute) {
    this.initRouteParamsListener();
  }

  ngAfterViewInit() {
    var iframe = document.getElementById(this.vimeoId);
    var player = new Player(iframe);

    player.on('play', function() {
      console.log('Played the video');

      player.getCurrentTime().then(function(seconds) {
        console.log('get seconds => ', seconds);
      });
  
      player.getDuration().then(function(duration) {
        console.log('get duration => ', duration);
      });
    });

    player.on('pause', function() {
      console.log('Pause the video');

      player.getCurrentTime().then(function(seconds) {
        console.log('get seconds => ', seconds);
      });
  
      player.getDuration().then(function(duration) {
        console.log('get duration => ', duration);
      });
    });
  }

  getVideo(){
    this.vimeoURL += this.vimeoId;
  }

  initRouteParamsListener(): void {
    this.paramsHandler = this.route.queryParams
      .subscribe(params => {
        if(params.id != this.vimeoId) this.vimeoId = params.id;
        this.getVideo();
      });
  }

  ngOnInit() {
  }

}
