import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {
  @Input() public video: any;

  constructor() { }

  ngOnInit() {}

}
