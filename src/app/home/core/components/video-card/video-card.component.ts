import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {
  @Input() public video: any;

  constructor(private router: Router) { }

  ngOnInit() {}

  goToVideo(video: any){
    this.router.navigate(['/home/video'], { queryParams: { id: video.vimeoId } });
  }

}
