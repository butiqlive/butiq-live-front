import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationUtil } from 'src/app/core/utils/notification.util';
import { CountryService } from 'src/app/core/services/country.service';
import { UserService } from 'src/app/core/services/user.service';
import { GENDER } from 'src/app/core/constants/global.constants';
import { User } from 'src/app/shared/models/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'contact-form',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactFG: FormGroup;
  public countries: [];
  public cities: [];
  private user: User;

  constructor(private fb: FormBuilder,
              private notification: NotificationUtil,
              private countryService: CountryService,
              private userService: UserService,
              private authService: AuthService) { }

  reset(){
    this.contactFG = this.fb.group({
      name: ['',[Validators.maxLength(50)]],
      lastName: ['',[Validators.maxLength(50)]],
      address: ['',[Validators.maxLength(100)]],
      cityName: ['',[Validators.maxLength(70)]],
      provinceName: ['',[Validators.maxLength(70)]],
      countryId: ['',[]],
      phoneNumber: ['',[Validators.maxLength(12)]],
      emergencyContactName: ['',[Validators.maxLength(100)]],
      emergencyContactPhone: ['',[Validators.maxLength(12)]],
      gender: ['',[]],
      birthDate: ['',[]],
      weight: [0,[]],
    })
  }

  loadCountries(){
    this.countryService.getAll()
      .subscribe(
        (response: any) => {
          if(response.data) {
            this.countries = response.data;
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

  getUserById(){
    this.userService.getById()
      .subscribe(
        (response: any) => {
          if(response.data) {
            this.user = response.data;
            this.contactFG.patchValue(this.user);
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

  ngOnInit() {
    this.reset();
    this.loadCountries();
    this.getUserById();
  }

  onSubmit(){
    if(this.contactFG.valid){
      let updateRequest = Object.assign({},this.contactFG.value);
      this.userService.updateUser(updateRequest)
        .subscribe(
          (response: any) => {
            if(response.data) {
              this.notification.success('Se guardaron tus datos satisfactoriamente', 'Listo!');
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
