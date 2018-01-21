import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartWinstreakComponent } from './chart-winstreak.component';

describe('ChartWinstreakComponent', () => {
  let component: ChartWinstreakComponent;
  let fixture: ComponentFixture<ChartWinstreakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartWinstreakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartWinstreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
