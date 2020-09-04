import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-hard',
  templateUrl: './table-hard.component.html',
  styleUrls: ['./table-hard.component.scss']
})
export class TableHardComponent implements OnInit {

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


  @Output() exportCallback = new EventEmitter();

  @Input() title:string = '';
  @Input() role:string = '';
  @Input() tc1:string = '';
  @Input() tc2:string = '';
  @Input() tc3:string = '';
  @Input() tc4:string = '';
  
  rowsSelected:string[] = [];
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
    if(!this.rowsSelected.includes(rowId)){
      this.rowsSelected.push(rowId);
    } else {
      for(let i = 0; i < this.rowsSelected.length; i++){
        if(this.rowsSelected[i] == rowId){
          this.rowsSelected.splice(i, 1);
        }
      }
    }
    console.log("Linha selecionada: ", rowId);
  }

  monthIDSelect(monthID:number){
    console.log("Mês selecionado:", monthID);
  }
}
