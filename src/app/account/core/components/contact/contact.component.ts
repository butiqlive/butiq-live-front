import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationUtil } from 'src/app/core/utils/notification.util';
import { CountryService } from 'src/app/core/services/country.service';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user.model';
import { GENDER } from 'src/app/core/constants/global.constants';

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
      name: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      address: ['',[Validators.required]],
      cityName: ['',[Validators.required]],
      provinceName: ['',[Validators.required]],
      countryId: ['',[Validators.required]],
      phoneNumber: ['',[Validators.required]],
      emergencyContactName: ['',[Validators.required]],
      emergencyContactPhone: ['',[Validators.required]],
      gender: ['',[Validators.required]],
      birthDate: ['',[Validators.required]],
      weight: ['',[Validators.required]],
    })
  }

  ngOnInit() {
    this.reset();
    this.loadCountries();
    this.getUserById();
  
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

  onSubmit(){
    if(this.contactFG.valid){

      const updateRequest = {
        name: this.contactFG.value.name,
        lastName: this.contactFG.value.lastName,
        address: this.contactFG.value.address,
        cityName: this.contactFG.value.cityName,
        provinceName: this.contactFG.value.provinceName,
        countryId: this.contactFG.value.countryId,
        phoneNumber: this.contactFG.value.phoneNumber,
        emergencyContactName: this.contactFG.value.emergencyContactName,
        emergencyContactPhone: this.contactFG.value.emergencyContactPhone,
        gender: this.contactFG.value.gender,
        birthDate: this.contactFG.value.birthDate,
        weight: this.contactFG.value.weight,
      }

      this.userService.updateUser(updateRequest)
        .subscribe(
          (response: any) => {
            if(response.data) {
             
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

  

  save(){}

}
