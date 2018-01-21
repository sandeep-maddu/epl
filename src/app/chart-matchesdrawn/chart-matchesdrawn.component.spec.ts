import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMatchesdrawnComponent } from './chart-matchesdrawn.component';

describe('ChartMatchesdrawnComponent', () => {
  let component: ChartMatchesdrawnComponent;
  let fixture: ComponentFixture<ChartMatchesdrawnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartMatchesdrawnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartMatchesdrawnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
