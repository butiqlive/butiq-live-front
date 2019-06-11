import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/core/services/video.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss']
})
export class HomeHeroComponent implements OnInit {

  public listOfCollections: any;
  public config: any;

  constructor(private videoService: VideoService, private router: Router) { }

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
          console.log('response => ', response.data);
          this.listOfCollections = response.data;
        },
        (error: any)=>{
          console.log('error => ', error);
        }
      )
  }

  ngOnInit() {
    this.reset();
    this.getCollections();
  }

  goToCollection(collectionId){
    this.router.navigate(['/home/collection'], { queryParams: { id: collectionId } });
  }
}
