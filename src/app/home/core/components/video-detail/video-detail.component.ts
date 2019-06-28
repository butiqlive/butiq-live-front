import { Component, OnInit, Input } from '@angular/core';
import { DIFFICULTY, BUTIQLIVE_SOCIAL } from 'src/app/core/constants/global.constants';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent implements OnInit {
  @Input() public video: any;
  public butiqlive_social = BUTIQLIVE_SOCIAL;
  public butiqlive_difficulty = DIFFICULTY;

  public videoFocus: any;
  public videoTarget: any;

  constructor() { }

  ngOnInit() {
    this.videoFocus = this.video.workoutParams.filter(workout => {
              return workout.type === 'FOCUS';
    });
    this.videoTarget = this.video.workoutParams.filter(workout => {
      return workout.type === 'TARGET';
    });
  }

}
