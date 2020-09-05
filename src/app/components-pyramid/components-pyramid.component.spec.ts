import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsPyramidComponent } from './components-pyramid.component';

describe('ComponentsPyramidComponent', () => {
  let component: ComponentsPyramidComponent;
  let fixture: ComponentFixture<ComponentsPyramidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsPyramidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsPyramidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
