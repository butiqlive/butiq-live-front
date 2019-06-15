import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationUtil } from 'src/app/core/utils/notification.util';
import { CountryService } from 'src/app/core/services/country.service';
import { UserService } from 'src/app/core/services/user.service';
import { GENDER } from 'src/app/core/constants/global.constants';
import { User } from 'src/app/shared/models/user.model';

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
              private userService: UserService) { }

  reset(){
    this.contactFG = this.fb.group({
      name: ['',[]],
      lastName: ['',[]],
      address: ['',[]],
      cityName: ['',[]],
      provinceName: ['',[]],
      countryId: ['',[]],
      phoneNumber: ['',[]],
      emergencyContactName: ['',[]],
      emergencyContactPhone: ['',[]],
      gender: ['',[]],
      birthDate: ['',[]],
      weight: ['',[]],
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
        (error: any) => {
          this.notification.error(error.message, 'Hubo un inconveniente');
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
        (error: any) => {
          this.notification.error(error.message, 'Hubo un inconveniente');
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
          (error: any) => {
            this.notification.error(error.message, 'Hubo un inconveniente');
          }
        );
    } else{
      this.notification.warning('Verifica los campos e intenta nuevamente', 'Formulario inválido');
    }
  }
}
