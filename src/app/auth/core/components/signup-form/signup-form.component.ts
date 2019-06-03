import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  public signupFG: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,
    private router: Router) { }

  reset(){
    this.signupFG = this.fb.group({
      name: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email: ['',[Validators.email]],
      password: ['',[Validators.required]]
    })
  }

  ngOnInit() {
    this.reset();
  }

  onSignup(){
    if(this.signupFG.valid){
      const signupRequest = {
        name: this.signupFG.value.name,
        lastName: this.signupFG.value.lastName,
        email: this.signupFG.value.email,
        password: this.signupFG.value.password,
        subscription: {
          planId: 1
        }
      }

      this.authService.signup(signupRequest).subscribe(
        (response: any) => {
          console.log('response => ', response);
        },
        (error: any) =>{
          console.log('error => ', error);
        }
      )

    } else{
      console.log('Formulario inválido', this.signupFG.value);
    }
  }

}
