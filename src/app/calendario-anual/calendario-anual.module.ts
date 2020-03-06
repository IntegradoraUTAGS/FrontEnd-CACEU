import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularCalendarYearViewModule } from '../public-api'
import { CalendarioAnualComponent } from './calendario-anual.component'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularCalendarYearViewModule.forRoot()
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [CalendarioAnualComponent]
})
export class CalendarioAnualModule { }
