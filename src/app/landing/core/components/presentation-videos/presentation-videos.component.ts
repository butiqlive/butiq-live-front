import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/core/services/video.service';

@Component({
  selector: 'app-presentation-videos',
  templateUrl: './presentation-videos.component.html',
  styleUrls: ['./presentation-videos.component.scss']
})
export class PresentationVideosComponent implements OnInit {

  public listOfIntroductionVideos: any;
  public vimeoURL: string;
  public config: any;

  constructor(private videoService: VideoService) { }

  reset(){
    this.vimeoURL = "https://player.vimeo.com/video/";
    this.config = {
      slidesPerView: 4,
      spaceBetween: 10,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    };
  }

  getVideos(){
    this.videoService.getIntroductionVideos()
      .subscribe(
        (response: any)=>{
          this.listOfIntroductionVideos = response.data;
        },
        (error: any)=>{
          console.log('error => ', error);
        }
      )
  }

  ngOnInit() {
    this.reset();
    this.getVideos();
  }

}
