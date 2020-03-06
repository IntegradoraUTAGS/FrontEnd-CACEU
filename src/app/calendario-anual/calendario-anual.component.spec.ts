import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioAnualComponent } from './calendario-anual.component';

describe('CalendarioAnualComponent', () => {
  let component: CalendarioAnualComponent;
  let fixture: ComponentFixture<CalendarioAnualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioAnualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioAnualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
