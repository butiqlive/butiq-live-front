import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationUtil } from 'src/app/core/utils/notification.util';
import { JwtService } from 'src/app/core/services/shared/jwt.service';
import { LocalStorageService } from 'src/app/core/services/shared/local-storage.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  public signupFG: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,
    private notification : NotificationUtil, private jwt: JwtService,
    private router: Router, private localStorage: LocalStorageService) { }

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
        (resp: any) => {
          if(resp.data.createdUser){
            const loginRequest = {
              email: this.signupFG.value.email,
              password: this.signupFG.value.password
            }

            this.authService.login(loginRequest)
              .subscribe(
                (response: any) => {
                  if(response.data) {
                    this.jwt.setToken(response.data.token);
                    this.localStorage.save('userLogged', response.data.user);
                    this.notification.success('Estás a un paso de ser más fit', 'Se creó tu cuenta :)');
                    this.router.navigateByUrl('/home');
                  }
                },
                (error: HttpErrorResponse) => {
                  if(error.error.data){
                    if(this.authService.isTokenValid(error.error.data.error)){
                      this.notification.error(error.error.data.msg, 'Algo malo pasó');
                    }
                  } else{
                    this.notification.error(error.message , 'Algo malo pasó');
                  }
                }
              );
          }
        },
        (error: HttpErrorResponse) => {
          if(error.error.data){
            if(this.authService.isTokenValid(error.error.data.error)){
              this.notification.error(error.error.data.msg, 'Algo malo pasó');
            }
          } else{
            this.notification.error(error.message , 'Algo malo pasó');
          }
        }
      );
    } else{
      this.notification.warning('Verifica los campos e intenta nuevamente', 'Formulario inválido');
    }
  }

}
