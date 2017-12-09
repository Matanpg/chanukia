import { Component, OnInit } from '@angular/core';
import { LightsService } from '../lights.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  date:string;

  constructor(private lightsService: LightsService) { }

  setDate(date) {
    this.date = date;
    console.log(this.date);
    this.lightsService.changeDate(this.date);
  }

  ngOnInit() {
  }

}
