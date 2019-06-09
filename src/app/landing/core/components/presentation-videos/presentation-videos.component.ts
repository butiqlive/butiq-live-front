import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/core/services/video.service';

@Component({
  selector: 'app-presentation-videos',
  templateUrl: './presentation-videos.component.html',
  styleUrls: ['./presentation-videos.component.scss']
})
export class PresentationVideosComponent implements OnInit {

  public listOfIntroductionVideos: any;
  public vimeoURL: string = "https://player.vimeo.com/video/333431595";
  public config: any;

  constructor(private videoService: VideoService) { }

  reset(){
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

    this.listOfIntroductionVideos = new Array(5);
  }

  getVideos(){
    this.videoService.getIntroductionVideos()
      .subscribe(
        (response: any)=>{
          console.log('introduction videos => ', response.data);
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
