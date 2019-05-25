import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleHeroComponent } from './simple-hero.component';

describe('SimpleHeroComponent', () => {
  let component: SimpleHeroComponent;
  let fixture: ComponentFixture<SimpleHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
