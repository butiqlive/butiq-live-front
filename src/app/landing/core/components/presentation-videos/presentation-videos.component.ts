import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation-videos',
  templateUrl: './presentation-videos.component.html',
  styleUrls: ['./presentation-videos.component.scss']
})
export class PresentationVideosComponent implements OnInit {

  public config: any;

  constructor() { }

  ngOnInit() {
    this.config = {
      slidesPerView: 4,
      pagination: {
        el: '.swiper-pagination',
      },
      paginationClickable: true,
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      },
      spaceBetween: 30
    };
  }

}
