import { Component, ViewChild } from '@angular/core';
import { EventSettingsModel, ScheduleComponent, ToolbarActionArgs } from '@syncfusion/ej2-angular-schedule';
import { ItemModel } from '@syncfusion/ej2-navigations';
import { scheduleData } from './data';
import { SelectedEventArgs } from '@syncfusion/ej2-angular-inputs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';
  @ViewChild('scheduler') schedulerObj !: ScheduleComponent;
  public selectedDate: Date = new Date(2023, 9, 9);
  public eventSettings: EventSettingsModel = { dataSource: scheduleData };
  public buttons = {browse: 'Choose file'}
  public onActionBegin(args: ToolbarActionArgs){
    if(args.requestType === "toolbarItemRendering"){
      let exportItem: ItemModel = {
        text: 'Export Calendar',
        click: this.onExportClick.bind(this)
      }
      let printItem: ItemModel = {
        text: 'Print',
        prefixIcon: 'e-icon e-print',
        click: this.onPrintClick.bind(this)
      }
      args.items?.push(exportItem, printItem);
    }
  }

  public onExportClick(){
    this.schedulerObj.exportToICalendar('schedulerEvents');
  }

  public onPrintClick(){
    this.schedulerObj.print({ height: 'Auto', width: 'Auto'});
  }

  public onFileSelect(args: SelectedEventArgs){
    let file = (args.event.target as HTMLInputElement)?.files?.[0] as Blob;
    this.schedulerObj.importICalendar(file);
  }
}
