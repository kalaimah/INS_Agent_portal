import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CgformServiceTsService } from '../cgform.service.ts.service';
@Component({
  selector: 'app-protect-form-one',
  templateUrl: './protect-form-one.component.html',
  styleUrls: ['./protect-form-one.component.css']
})
export class ProtectFormOneComponent {
  
  firstFormGroup = this._formBuilder.group({
    firstName: [''],
    lastName: [''],
    pno: [''],
    email: [''],
    dob: [''],
    pincode: [''],
    gender: [''],
    smokingControl: [''],
    alcoholControl: [''],
    Address: [''],
    DOB: ['']
  });
  secondFormGroup = this._formBuilder.group({
    annualIncome: [''],
    govtRebate: [''],
    taxRebate: ['']
  });
  thirdFormGroup = this._formBuilder.group({
    secondCtrl: [''],
  });
  fourFormGroup = this._formBuilder.group({
    secondCtrl: [''],
  });

  public smokingValue = '';
  public alcoholValue = '';

  public yesButtonColor = 'white';
  public noButtonColor = 'white';

  public yesButtonColor1 = 'white';
  public noButtonColor1 = 'white';


  constructor(private _formBuilder: FormBuilder,
    private cgService: CgformServiceTsService, private http: HttpClient) {

  }

  onSubmit() {
    const data = {
      firstName: this.firstFormGroup.value.firstName,
      lastName: this.firstFormGroup.value.lastName,
      pno: this.firstFormGroup.value.pno,
      email: this.firstFormGroup.value.email,
      dob: this.firstFormGroup.value.dob,
      pincode: this.firstFormGroup.value.pincode,
      gender: this.firstFormGroup.value.gender,
      smokingControl: this.firstFormGroup.value.smokingControl,
      alcoholControl: this.firstFormGroup.value.alcoholControl,
      Address: this.firstFormGroup.value.Address,
      DOB: this.firstFormGroup.value.DOB,

      annualIncome:this.secondFormGroup.value.annualIncome,
      govtRebate:this.secondFormGroup.value.govtRebate,
      taxRebate:this.secondFormGroup.value.taxRebate,


      documents: this.thirdFormGroup.value,
      quotation: this.fourFormGroup.value
    };

    this.cgService.sendData(data).subscribe((response: any) => {
      console.log(response); // handle response
      });
  }


  changeBackground(value: string) {
    this.yesButtonColor = value === 'yes' ? 'green' : 'white';
    this.noButtonColor = value === 'no' ? 'red' : 'white';
    this.smokingValue = value;
    this.firstFormGroup.get('smokingControl')?.setValue(value);
  }


  changeBackground1(value: string) {
  this.yesButtonColor1 = value === 'yes' ? 'green' : 'white';
  this.noButtonColor1 = value === 'no' ? 'red' : 'white';
  this.alcoholValue = value;
  this.firstFormGroup.get('alcoholControl')?.setValue(value);
  }


}