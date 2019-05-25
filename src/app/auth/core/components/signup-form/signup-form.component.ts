import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  public signupFG: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  reset(){
    this.signupFG = this.fb.group({
      name: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email: ['',[Validators.email]],
      password: ['',[Validators.required]],
      terms: [false ,[Validators.required]]
    })
  }

  ngOnInit() {
    this.reset();
  }

  onSignup(){}

}
