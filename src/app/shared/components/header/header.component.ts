import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'butiqlive-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public userIsLogged: boolean;

  constructor(private router: Router) {
    this.userIsLogged = false;
    
    this.router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        if (val.url.indexOf('home') > -1 || val.url.indexOf('account') > -1){
          this.userIsLogged = true;
        }
      }
    })
  }

  ngOnInit() {
  }

}
