import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperRadioButtonsComponent } from './super-radio-buttons.component';

describe('SuperRadioButtonsComponent', () => {
  let component: SuperRadioButtonsComponent;
  let fixture: ComponentFixture<SuperRadioButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperRadioButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperRadioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
