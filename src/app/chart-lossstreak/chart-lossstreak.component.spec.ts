import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLossstreakComponent } from './chart-lossstreak.component';

describe('ChartLossstreakComponent', () => {
  let component: ChartLossstreakComponent;
  let fixture: ComponentFixture<ChartLossstreakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartLossstreakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartLossstreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
