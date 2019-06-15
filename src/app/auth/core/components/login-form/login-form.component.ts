import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { JwtService } from 'src/app/core/services/shared/jwt.service';
import { NotificationUtil } from 'src/app/core/utils/notification.util';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/shared/local-storage.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public loginFG: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,
    private jwt: JwtService, private notification: NotificationUtil, 
    private localStorage: LocalStorageService, private router: Router) { }

  reset(){
    this.loginFG = this.fb.group({
      email: ['',[Validators.email]],
      password: ['',[Validators.required]],
    })
  }

  ngOnInit() {
    this.reset();
  }

  onLogin(){
    if(this.loginFG.valid){

      const loginRequest = {
        email: this.loginFG.value.email,
        password: this.loginFG.value.password
      }

      this.authService.login(loginRequest)
        .subscribe(
          (response: any) => {
            if(response.data) {
              this.jwt.setToken(response.data.token);
              this.localStorage.save('userLogged', response.data.user);
              this.notification.success('', 'Bienvenid@ de nuevo a la #Tributiq');
              this.router.navigateByUrl('/home');
            }
          },
          (error: any) => {
            this.notification.error(error.message, 'Hubo un inconveniente');
          }
        );

    } else{
      this.notification.warning('Verifica los campos e intenta nuevamente', 'Formulario inválido');
    }
  }

}
