import { Component, OnInit, Input } from '@angular/core';
import { BUTIQLIVE_SOCIAL } from 'src/app/core/constants/global.constants';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent implements OnInit {
  @Input() public video: any;
  public butiqlive_social = BUTIQLIVE_SOCIAL;

  constructor() { }

  ngOnInit() {
  }

}
