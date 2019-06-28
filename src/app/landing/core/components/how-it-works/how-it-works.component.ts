import { Component, OnInit } from '@angular/core';
import { BUTIQLIVE_SOCIAL } from 'src/app/core/constants/global.constants';

@Component({
  selector: 'how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {
  public butiqlive_social = BUTIQLIVE_SOCIAL;

  constructor() { }

  ngOnInit() {
  }

}
