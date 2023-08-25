import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-catalogue',
  templateUrl: './product-catalogue.component.html',
  styleUrls: ['./product-catalogue.component.css']
})
export class ProductCatalogueComponent {
  constructor(private router:Router ){};
  redirect(){
     this.router.navigate(['/cg-expand']);
  }
}
