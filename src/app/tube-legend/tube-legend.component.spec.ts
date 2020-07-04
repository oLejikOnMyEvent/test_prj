import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TubeLegendComponent } from './tube-legend.component';

describe('TubeLegendComponent', () => {
  let component: TubeLegendComponent;
  let fixture: ComponentFixture<TubeLegendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TubeLegendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TubeLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
