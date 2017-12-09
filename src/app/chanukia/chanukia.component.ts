import { Component, OnInit } from '@angular/core';
import { LightsService } from '../lights.service';

@Component({
  selector: 'app-chanukia',
  templateUrl: './chanukia.component.html',
  styleUrls: ['./chanukia.component.css']
})
export class ChanukiaComponent implements OnInit {

  lightsArr = [];

  constructor(private lightsService: LightsService) {
      console.log(this.lightsArr);
   }

  ngOnInit() {
    this.lightsService.lightsArr.subscribe(a => this.lightsArr = a);
  }

}
