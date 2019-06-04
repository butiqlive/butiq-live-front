import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactFG: FormGroup;

  constructor(private fb: FormBuilder) { }

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
  }

  save(){}

}
