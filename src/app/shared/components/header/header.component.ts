import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { JwtService } from 'src/app/core/services/shared/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'butiqlive-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public userIsLogged: boolean;

  constructor(private authService: AuthService, private jwt: JwtService, private router: Router) {
    this.userIsLogged = this.jwt.getToken() ? true : false;
  }

  ngOnInit() {
  }

  goToHome(){
    if (this.userIsLogged){
      this.router.navigateByUrl('/home');
    } else {
      this.router.navigateByUrl('/');
    }
  }

  onLogout(){
    this.authService.logout();
  }

}
