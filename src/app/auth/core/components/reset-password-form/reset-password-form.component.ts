import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss']
})
export class ResetPasswordFormComponent implements OnInit {

  public resetPasswordFG: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  reset(){
    this.resetPasswordFG = this.fb.group({
      email: ['',[Validators.email]]
    })
  }

  ngOnInit() {
    this.reset();
  }

  onResetPassword(){}

}
