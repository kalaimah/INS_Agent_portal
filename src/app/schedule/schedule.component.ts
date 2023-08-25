import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  title = 'appBootstrap';
  
  model: any;
  

  constructor() {

    const today = new Date();

   for (let i = 0; i < 7; i++) {

    const date = new Date(today);

    date.setDate(today.getDate() + i);

    this.dates.push(date);

   } }

  dates: Date[] = [];

}
