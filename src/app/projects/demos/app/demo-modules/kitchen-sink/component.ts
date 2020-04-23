import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import { HttpClient } from '@angular/common/http';

const colors: any = {
  red: {
    primary: '#ad2121'
  },
  blue: {
    primary: '#1e90ff'
  },
  yellow: {
    primary: '#e3bc08'
  }
};

@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['styles.css'],
  templateUrl: 'template.html'
})
export class DemoComponent {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 dias del evento',
      color: colors.red,
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: startOfDay(new Date()),
      title: 'Un evento sin fecha de finalización',
      color: colors.yellow,
      actions: this.actions
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'Un evento largo que abarca 2 meses.',
      color: colors.blue,
      allDay: true
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(new Date(), 2),
      title: 'Un evento arrastrable y redimensionable',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];

  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal, private httpClient: HttpClient) {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'Nuevo Evento',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red
      }
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  mostrarEventos() {
    return this.httpClient
      .get('http://172.17.1.7:5023/evento/obtener', {})
      .subscribe(
        (data: any) => {
          console.log(data.eventos);
          let i = 0;
          document.getElementById('contenido').innerHTML = '';
          for (let eventos of data.eventos) {
            i = i++;

            this.events = [
              ...this.events,
              {
                title: eventos.nombre,
                start: eventos.fechaInicio,
                end: eventos.fechaFinal,
                color: colors.red,
                draggable: true,
                resizable: {
                  beforeStart: true,
                  afterEnd: true
                }
              }
            ];
            document.getElementById('contenido').innerHTML += `
                              
                              <tr>
                                  <th scope="row">${eventos.nombre}</th>
                                  <td>${eventos.tipo}</td>
                                  <td>${eventos.enfocado}</td>
                                  <td>${eventos.fechaInicio}</td>
                                  <td>${eventos.fechaFinal}</td>
                                  <td>${eventos.descripcion}</td>
                                  <td>${eventos.repetir}</td>
                                  <td>${eventos.lugar}</td>
                                  <td>${eventos.hora}</td>
                                  <td>${eventos.capacidad}</td>
                                  <td>${eventos.detalles}</td>

                                  </td>

                                  </td>
                              </tr>                          
                              `;
          }
        },
        err => {
          console.log(err);
          alert('ERROR\n' + err.error.err.message);
        }
      );
  }

  ngOnInit() {
    this.mostrarEventos();
  }
}
