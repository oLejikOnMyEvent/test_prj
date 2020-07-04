import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TubePanelComponent } from './tube-panel.component';

describe('TubePanelComponent', () => {
  let component: TubePanelComponent;
  let fixture: ComponentFixture<TubePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TubePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TubePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
