import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LightsService } from './lights.service';


import { AppComponent } from './app.component';
import { CandleComponent } from './candle/candle.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ShamashComponent } from './shamash/shamash.component';
import { ChanukiaComponent } from './chanukia/chanukia.component';


@NgModule({
  declarations: [
    AppComponent,
    CandleComponent,
    CalendarComponent,
    ShamashComponent,
    ChanukiaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LightsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
