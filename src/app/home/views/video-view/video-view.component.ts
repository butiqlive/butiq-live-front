import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

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
