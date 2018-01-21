import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartGoalsscoredComponent } from './chart-goalsscored.component';

describe('ChartGoalsscoredComponent', () => {
  let component: ChartGoalsscoredComponent;
  let fixture: ComponentFixture<ChartGoalsscoredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartGoalsscoredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartGoalsscoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
