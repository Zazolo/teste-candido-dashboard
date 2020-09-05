import { Component, OnInit } from '@angular/core';
import { DropMenuDataDto } from 'src/app/model/drop-menu-data-dto';
import {Chart} from 'chart.js';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalTableExportComponent } from 'src/app/components/modal/modal-table-export/modal-table-export.component';
import { ModalTableViewStudentComponent } from 'src/app/components/modal/modal-table-view-student/modal-table-view-student.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  periods_available:DropMenuDataDto[] = [];
  query_type_selected:number = 1;
  darkness_activated = false;
  
  constructor(private matDialog:MatDialog) { }

  ngOnInit(): void {
    this.periods_available.push({label:"2020.1", value:1});
  }

  menuPeriodSelectStartSelect(){

    if(this.darkness_activated){
      this.darkness_activated = false;
    } else {
      this.darkness_activated = true;
    }
  }

  

  menuPeriodSelect(option:number){
    console.log("Período selecionado:", option);
   
  }

  queryTypeSelect(type:number){
    console.log("Consulta selecionada do tipo:", type);
    this.query_type_selected = type;
  }

  searchBasedOnQuery(){
    console.log("Clicou em Buscar", this.query_type_selected);
    
    ///fazer o scroll da página aqui
  }

  exportModal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.width = "400px";
    dialogConfig.height = "450px";
    dialogConfig.panelClass = "modalClass";
    const modalDialog = this.matDialog.open(ModalTableExportComponent, dialogConfig);
  }
  seeMoreStudentModal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component-2";
    dialogConfig.width = "500px";
    dialogConfig.height = "400px";
    dialogConfig.panelClass = "modalClass";
    const modalDialog = this.matDialog.open(ModalTableViewStudentComponent, dialogConfig);
  }

  

}
