import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosCarouselComponent } from './videos-carousel.component';

describe('VideosCarouselComponent', () => {
  let component: VideosCarouselComponent;
  let fixture: ComponentFixture<VideosCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
