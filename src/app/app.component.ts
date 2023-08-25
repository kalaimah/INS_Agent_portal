import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'INS_Agent_Portal';
  isSideNavCollapsed=false;
  screenWidth!: number;
  onToggleSideNav(data:SideNavToggle):void{
        this.screenWidth=data.screenWidth;
        this.isSideNavCollapsed=data.collapsed;
  }
}
