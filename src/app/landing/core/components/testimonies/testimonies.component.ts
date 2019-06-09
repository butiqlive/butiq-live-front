import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.scss']
})
export class TestimoniesComponent implements OnInit {

  public testimoniesList: any;
  public config: any;

  constructor() { }

  ngOnInit() {
    this.config = {
      slidesPerView: 1,
      paginationClickable: true,
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
      spaceBetween: 10,
      /* autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      } */
    };

    this.testimoniesList = new Array(5);
  }

}
