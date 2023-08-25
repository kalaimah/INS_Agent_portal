import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css']
})
export class InsightsComponent {

  constructor(private router:Router ){};
  newleads(){
     this.router.navigate(['newleads']);
  }
  renewal()
  {
    this.router.navigate(['renewal']);
  }
  expired()
  {
    this.router.navigate(['expired']);
  }
}
