import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService,
   WorkWeekService, MonthService, ICalendarExportService, ICalendarImportService,
   PrintService } from '@syncfusion/ej2-angular-schedule';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ScheduleModule, RecurrenceEditorModule, UploaderModule
  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService, ICalendarExportService, 
    ICalendarImportService, PrintService],
  bootstrap: [AppComponent]
})
export class AppModule { }
