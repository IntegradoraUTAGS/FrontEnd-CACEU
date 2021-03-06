import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario-anual',
  templateUrl: './calendario-anual.component.html',
  styleUrls: ['./calendario-anual.component.css']
})
export class CalendarioAnualComponent implements OnInit {

  constructor() { }
  colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3'
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF'
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA'
    }
  };
  actions: any[] = [
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      name: 'delete'
    },
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      name: 'edit'
    }
  ];
  events: any = [
    {
      start: new Date(),
      end: new Date(),
      title: 'evento 1',
      color: this.colors.red,
      actions: this.actions
    },
    {
      start: new Date(),
      end: new Date(),
      title: 'evento 2',
      color: this.colors.yellow,
      actions: this.actions
    }
  ]
  viewDate: Date = new Date();
  themecolor: any = '#0a5ab3'
  actionClicked(event) {
    console.log(event);
  }
  eventClicked(event) {
    console.log(event)
  }
  
  ngOnInit(): void {
  }

}
