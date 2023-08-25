import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newleads',
  templateUrl: './newleads.component.html',
  styleUrls: ['./newleads.component.css']
})
export class NewleadsComponent {
  constructor(private router:Router ){};
  form_one(){
     this.router.navigate(['/cg-form']);
  }
}
