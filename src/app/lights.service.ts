import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LightsService {

  // lightsArr = [true, false, false, false, false, false, false, false];

  private dateSource = new BehaviorSubject<any>("");
  selectedDate = this.dateSource.asObservable();
  private lightsArrSource = new BehaviorSubject<boolean[]>([false, false, false, false, false, false, false, false]);
  lightsArr = this.lightsArrSource.asObservable();

  constructor() { }

  changeDate(date: any) {
    this.dateSource.next(date);
    this.selectedDate = date;
    console.log(this.selectedDate);
    this.updateLightsArr();
    console.log(this.lightsArr);
  }

  updateLightsArr() {
    let b;
    if (this.selectedDate.toString() === '2017-12-12') {b = [true, false, false, false, false, false, false, false];}
    else if (this.selectedDate.toString() === '2017-12-13') {b = [true, true, false, false, false, false, false, false];}
    else if (this.selectedDate.toString() === '2017-12-14') {b = [true, true, true, false, false, false, false, false];}
    else if (this.selectedDate.toString() === '2017-12-15') {b = [true, true, true, true, false, false, false, false];}
    else if (this.selectedDate.toString() === '2017-12-16') {b = [true, true, true, true, true, false, false, false];}
    else if (this.selectedDate.toString() === '2017-12-17') {b = [true, true, true, true, true, true, false, false];}
    else if (this.selectedDate.toString() === '2017-12-18') {b = [true, true, true, true, true, true, true, false];}
    else if (this.selectedDate.toString() === '2017-12-19') {b = [true, true, true, true, true, true, true, true];}
    else {b = [false, false, false, false, false, false, false, false]};
    this.lightsArrSource.next(b);
  }

}
