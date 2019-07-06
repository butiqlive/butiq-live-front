import { Component, OnInit, ViewChild, ElementRef, Renderer2, HostListener } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { JwtService } from 'src/app/core/services/shared/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'butiqlive-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild("dropdownContent1") dropdownContent1: ElementRef;
  @ViewChild("dropdownContent2") dropdownContent2: ElementRef;
  @ViewChild("dropdownContent3") dropdownContent3: ElementRef;

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      if(this.dropdownContent1) this.renderer.removeClass(this.dropdownContent1.nativeElement, "dopdown-content-block");
      if(this.dropdownContent2) this.renderer.removeClass(this.dropdownContent2.nativeElement, "dopdown-content-block");
      if(this.dropdownContent3) this.renderer.removeClass(this.dropdownContent3.nativeElement, "dopdown-content-block");
    }
  }

  public userIsLogged: boolean;
  public showVideoLink: boolean;

  constructor(private authService: AuthService, private jwt: JwtService,
    private router: Router, private renderer: Renderer2, private eRef: ElementRef) {
    this.userIsLogged = this.jwt.getToken() ? true : false;
  }

  ngOnInit() {
    var location = window.location.href;
    this.showVideoLink = location.indexOf('home') > -1 ? false : true;
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

  showDropdownContent(position: number){
    switch (position) {
      case 1:
        this.renderer.addClass(this.dropdownContent1.nativeElement, "dopdown-content-block");
        break;
      case 2:
        this.renderer.addClass(this.dropdownContent2.nativeElement, "dopdown-content-block");
        break;
      case 3:
        this.renderer.addClass(this.dropdownContent3.nativeElement, "dopdown-content-block");
        break;
    }
  }
}