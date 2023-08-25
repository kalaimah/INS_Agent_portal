import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cg-protect-expand',
  templateUrl: './cg-protect-expand.component.html',
  styleUrls: ['./cg-protect-expand.component.css']
})
export class CgProtectExpandComponent {
  constructor(private router:Router ){};
  redirect(){
     this.router.navigate(['/calculate-premium']);
  }
  disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
}
