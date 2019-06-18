import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from 'src/app/core/services/video.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationUtil } from 'src/app/core/utils/notification.util';

@Component({
  selector: 'app-collection-view',
  templateUrl: './collection-view.component.html',
  styleUrls: ['./collection-view.component.scss']
})
export class CollectionViewComponent implements OnInit {

  public paramsHandler: Subscription;
  public collectionId: any;
  public collection: any;

  constructor(private route: ActivatedRoute, private videoService: VideoService,
    private notification: NotificationUtil) {
    this.initRouteParamsListener();
  }

  initRouteParamsListener(): void {
    this.paramsHandler = this.route.queryParams
      .subscribe(params => {
        if(params.id != this.collectionId) this.collectionId = params.id;
        this.getCollection();
      });
  }

  getCollection(){
    this.videoService.getCollectionById(this.collectionId)
      .subscribe(
        (response: any)=>{
          this.collection = response.data;
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

  ngOnInit() {
  }

}
