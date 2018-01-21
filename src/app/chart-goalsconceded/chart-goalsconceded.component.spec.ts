import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartGoalsconcededComponent } from './chart-goalsconceded.component';

describe('ChartGoalsconcededComponent', () => {
  let component: ChartGoalsconcededComponent;
  let fixture: ComponentFixture<ChartGoalsconcededComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartGoalsconcededComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartGoalsconcededComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
