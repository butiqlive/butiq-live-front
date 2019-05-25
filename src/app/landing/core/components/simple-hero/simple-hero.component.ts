import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-hero',
  templateUrl: './simple-hero.component.html',
  styleUrls: ['./simple-hero.component.scss']
})
export class SimpleHeroComponent implements OnInit {
  @Input() style: any;

  constructor() { }

  ngOnInit() {
  }

}
