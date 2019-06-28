import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/core/services/video.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationUtil } from 'src/app/core/utils/notification.util';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss']
})
export class HomeHeroComponent implements OnInit {

  public listOfCollections: any;
  public config: any;

  constructor(private videoService: VideoService, private authService: AuthService,
    private router: Router, private notification: NotificationUtil) { }

  reset(){
    this.config = {
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
      },
      paginationClickable: true,
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      },
    };
  }

  getCollections(){
    this.videoService.getCollectionVideos()
      .subscribe(
        (response: any)=>{
          this.listOfCollections = response.data;
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
      )
  }

  ngOnInit() {
    this.reset();
    this.getCollections();
  }

  goToCollection(collectionId: number){
    this.router.navigate(['/home/collection'], { queryParams: { id: collectionId } });
  }
}
