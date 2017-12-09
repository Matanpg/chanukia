import { Component, OnInit, Input } from '@angular/core';
// import { LightsService } from '../lights.service';

@Component({
  selector: 'app-candle',
  templateUrl: './candle.component.html',
  styleUrls: ['./candle.component.css']
})
export class CandleComponent implements OnInit {

  @Input() light: boolean;

  constructor() {}

  ngOnInit() {}

}
