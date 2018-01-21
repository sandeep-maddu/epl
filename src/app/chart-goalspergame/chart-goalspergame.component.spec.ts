import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartGoalspergameComponent } from './chart-goalspergame.component';

describe('ChartGoalspergameComponent', () => {
  let component: ChartGoalspergameComponent;
  let fixture: ComponentFixture<ChartGoalspergameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartGoalspergameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartGoalspergameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
