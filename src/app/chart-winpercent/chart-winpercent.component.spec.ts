import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartWinpercentComponent } from './chart-winpercent.component';

describe('ChartWinpercentComponent', () => {
  let component: ChartWinpercentComponent;
  let fixture: ComponentFixture<ChartWinpercentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartWinpercentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartWinpercentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
