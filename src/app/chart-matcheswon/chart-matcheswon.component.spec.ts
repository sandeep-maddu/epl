import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMatcheswonComponent } from './chart-matcheswon.component';

describe('ChartMatcheswonComponent', () => {
  let component: ChartMatcheswonComponent;
  let fixture: ComponentFixture<ChartMatcheswonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartMatcheswonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartMatcheswonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
