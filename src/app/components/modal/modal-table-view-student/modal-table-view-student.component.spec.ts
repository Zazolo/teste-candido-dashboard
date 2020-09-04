import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTableViewStudentComponent } from './modal-table-view-student.component';

describe('ModalTableViewStudentComponent', () => {
  let component: ModalTableViewStudentComponent;
  let fixture: ComponentFixture<ModalTableViewStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTableViewStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTableViewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
