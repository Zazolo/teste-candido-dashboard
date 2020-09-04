import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-table-ultra-hard',
  templateUrl: './table-ultra-hard.component.html',
  styleUrls: ['./table-ultra-hard.component.scss']
})
export class TableUltraHardComponent implements OnInit {

  data:{
    course_name:string;
    student_quantity:number;
    paid:string;
    passed_value:string; //float to the chart
  }[] = [
    {
      course_name:"Engenharia de Produção",
      paid: `R$${Math.floor(Math.random() * 1 * 1000).toString()},00`,
      student_quantity:Math.floor(Math.random()*1*100),
      passed_value:`R$${Math.floor(Math.random() * 1 * 1000).toString()},00`
    },
    {
      course_name:"Ciência da Computação",
      paid: `R$${Math.floor(Math.random() * 1 * 1000).toString()},00`,
      student_quantity:Math.floor(Math.random()*1*100),
      passed_value:`R$${Math.floor(Math.random() * 1 * 1000).toString()},00`
    },
    {
      course_name:"Recursos Humanos (RH)",
      paid: `R$${Math.floor(Math.random() * 1 * 1000).toString()},00`,
      student_quantity:Math.floor(Math.random()*1*100),
      passed_value:`R$${Math.floor(Math.random() * 1 * 1000).toString()},00`
    },
    {
      course_name:"Gastronomia",
      paid: `R$${Math.floor(Math.random() +1 * 1 * 1000).toString()},00`,
      student_quantity:Math.floor(Math.random()*1*100),
      passed_value:`R$${Math.floor(Math.random() * 1 * 1000).toString()},00`
    },
    {
      course_name:"Administração",
      paid: `R$${Math.floor(Math.random() * 1 * 1000).toString()},00`,
      student_quantity:Math.floor(Math.random()*1*100),
      passed_value:`R$${Math.floor(Math.random() * 1 * 1000).toString()},00`
    }
  ];

  
  data_inadimplentes:{
    course_name:string;
    student_quantity:number;
    paid:string;
    passed_value:string; //float to the chart
  }[] = [
    {
      course_name:"Engenharia de Produção",
      paid: `R$${Math.floor(Math.random() * 1 * 1000).toString()},00`,
      student_quantity:Math.floor(Math.random()*1*100),
      passed_value:`R$${Math.floor(Math.random() * 1 * 1000).toString()},00`
    },
    {
      course_name:"Ciência da Computação",
      paid: `R$${Math.floor(Math.random() * 1 * 1000).toString()},00`,
      student_quantity:Math.floor(Math.random()*1*100),
      passed_value:`R$${Math.floor(Math.random() * 1 * 1000).toString()},00`
    },
    {
      course_name:"Recursos Humanos (RH)",
      paid: `R$${Math.floor(Math.random() * 1 * 1000).toString()},00`,
      student_quantity:Math.floor(Math.random()*1*100),
      passed_value:`R$${Math.floor(Math.random() * 1 * 1000).toString()},00`
    },
    {
      course_name:"Gastronomia",
      paid: `R$${Math.floor(Math.random() +1 * 1 * 1000).toString()},00`,
      student_quantity:Math.floor(Math.random()*1*100),
      passed_value:`R$${Math.floor(Math.random() * 1 * 1000).toString()},00`
    },
    {
      course_name:"Administração",
      paid: `R$${Math.floor(Math.random() * 1 * 1000).toString()},00`,
      student_quantity:Math.floor(Math.random()*1*100),
      passed_value:`R$${Math.floor(Math.random() * 1 * 1000).toString()},00`
    }
  ];

  @Output() exportCallback = new EventEmitter();
  @Output() seeMoreCallback = new EventEmitter();

  @Input() title:string = '';
  @Input() role:string = '';
  @Input() tc1:string = '';
  @Input() tc2:string = '';
  @Input() tc3:string = '';
  @Input() tc4:string = '';
  
  rowsSelected:string[] = [];
  panel_expanded:string = '';
  constructor() { }

  ngOnInit(): void {
    
    

  }

  export(){
    this.exportCallback.emit();
  }
  
  paginator(page_number:number){
    console.log("Está na página", page_number);
  }


  selectRow(rowId:string){
    if(this.rowsSelected.includes(rowId)){
      this.rowsSelected = [];
      return;
    }

    this.rowsSelected.push(rowId);
  }

  monthIDSelect(monthID:number){
    console.log("Mês selecionado:", monthID);
  }

  seeAllStudents(rowId:string){
    this.selectRow(rowId);
    if(this.panel_expanded == rowId){
      this.panel_expanded = '';
    } else {
      this.panel_expanded = rowId;
    }
    
  }

  seeMore(){
    this.seeMoreCallback.emit();
  }

}
