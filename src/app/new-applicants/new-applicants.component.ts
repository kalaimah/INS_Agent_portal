import { Component } from '@angular/core';
import { Router } from '@angular/router';
import applicantsData from './applicantdata.json';
interface Applicantdata{
  id:String;
  name:String;
  prdtype:String;
  date:String;
  status:String;
}
@Component({
  selector: 'app-new-applicants',
  templateUrl: './new-applicants.component.html',
  styleUrls: ['./new-applicants.component.css']
})
export class NewApplicantsComponent {
  datas:Applicantdata[]=applicantsData;

  constructor(private router:Router ){};
  redirect(){
     this.router.navigate(['/totalapplications']);
  }
}
