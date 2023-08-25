import {Component, OnInit} from '@angular/core';  
import {FormBuilder, FormGroup, Validators} from '@angular/forms';  
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit{
  constructor(private _formBuilder: FormBuilder){


  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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