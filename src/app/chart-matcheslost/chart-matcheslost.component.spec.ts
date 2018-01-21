import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMatcheslostComponent } from './chart-matcheslost.component';

describe('ChartMatcheslostComponent', () => {
  let component: ChartMatcheslostComponent;
  let fixture: ComponentFixture<ChartMatcheslostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartMatcheslostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartMatcheslostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
