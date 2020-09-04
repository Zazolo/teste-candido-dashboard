import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-table-export',
  templateUrl: './modal-table-export.component.html',
  styleUrls: ['./modal-table-export.component.scss']
})
export class ModalTableExportComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<ModalTableExportComponent>) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

  formatSelected(opt:number){
    switch (opt){
      case 1:
        console.log("PDF selecionado.")
        break;
      case 2:
      console.log("Microsoft selecionado.")
      break;
    }
  }

}
