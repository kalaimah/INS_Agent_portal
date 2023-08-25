import { Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-cg-details-form',
  templateUrl: './cg-details-form.component.html',
  styleUrls: ['./cg-details-form.component.css']
})
export class CgDetailsFormComponent {
  constructor(private _formBuilder: FormBuilder){


  }
     firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
     });
     secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
     });
     thirdFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
     });
     isLinear = false;
   
   
   
   
   
   
     public currentPage:any = 0;
   
     public numPages:any = 3;
   
     public progress:any = 0;
   
   
   
   
   
   
     nextPage() {
   
     if (this.currentPage < this.numPages) {
   
     this.currentPage++;
   
     /* this.updateProgressBar(); */
   
     }
   
     }
   
   
   
   
   
   
    /*  updateProgressBar() {
   
     this.progress = (this.currentPage / this.numPages) * 100;
   
     } */
   
   
   
   
     prevPage() {
   
     if (this.currentPage > 0) {
   
     this.currentPage--;
   
     /*  this.updateProgressBar(); */
   
    }
   
    }
   
  
  
}