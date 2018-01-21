import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartGoaldiffComponent } from './chart-goaldiff.component';

describe('ChartGoaldiffComponent', () => {
  let component: ChartGoaldiffComponent;
  let fixture: ComponentFixture<ChartGoaldiffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartGoaldiffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartGoaldiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
