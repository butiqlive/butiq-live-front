import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationUtil } from 'src/app/core/utils/notification.util';
import { CountryService } from 'src/app/core/services/country.service';

@Component({
  selector: 'contact-form',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactFG: FormGroup;
  public countries: [];
  public cities: [];

  constructor(private fb: FormBuilder,
              private notification: NotificationUtil,
              private countryService: CountryService) { }

  reset(){
    this.contactFG = this.fb.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      address: ['',[Validators.required]],
      city: ['',[Validators.required]],
      state: ['',[Validators.required]],
      country: ['',[Validators.required]],
      phoneNumber: ['',[Validators.required]],
      emergencyName: ['',[Validators.required]],
      emergencyPhoneNumber: ['',[Validators.required]],
      gender: ['',[Validators.required]],
      birthDate: ['',[Validators.required]],
      weight: ['',[Validators.required]],
    })
  }

  ngOnInit() {
    this.reset();
    this.loadCountries();
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

  

  save(){}

}
