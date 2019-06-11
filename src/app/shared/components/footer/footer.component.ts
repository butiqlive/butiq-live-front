import { Component, OnInit } from '@angular/core';
import { BUTIQLIVE_SOCIAL } from 'src/app/core/constants/global.constants';

@Component({
  selector: 'butiqlive-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public butiqlive_social = BUTIQLIVE_SOCIAL;

  constructor() { }

  ngOnInit() {
  }

}
