import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public loginFG: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  reset(){
    this.loginFG = this.fb.group({
      email: ['',[Validators.email]],
      password: ['',[Validators.required]],
      remember: [false, []]
    })
  }

  ngOnInit() {
    this.reset();
  }

  onLogin(){
    this.router.navigateByUrl('/home');
  }

}
