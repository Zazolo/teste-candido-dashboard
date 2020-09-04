import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-table-view-student',
  templateUrl: './modal-table-view-student.component.html',
  styleUrls: ['./modal-table-view-student.component.scss']
})
export class ModalTableViewStudentComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<ModalTableViewStudentComponent>) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

  aba:number = 0;


  tabSelection(aba:number){
    this.aba = aba;
  }
}
