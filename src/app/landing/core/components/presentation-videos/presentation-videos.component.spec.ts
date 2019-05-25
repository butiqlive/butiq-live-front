import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationVideosComponent } from './presentation-videos.component';

describe('PresentationVideosComponent', () => {
  let component: PresentationVideosComponent;
  let fixture: ComponentFixture<PresentationVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
