import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-table-simple',
  templateUrl: './table-simple.component.html',
  styleUrls: ['./table-simple.component.scss']
})
export class TableSimpleComponent implements OnInit, AfterViewInit {

  data:{
    course_name:string;
    student_quantity:number;
    period:string;
    total_representation:number; //float to the chart
  }[] = [
    {
      course_name:"Engenharia de Produçãosssss",
      period:"2020.1",
      student_quantity:25,
      total_representation:30
    },
    {
      course_name:"Administração",
      period:"2020.1",
      student_quantity:150,
      total_representation:50
    },
    {
      course_name:"Engenharia de Produção",
      period:"2020.1",
      student_quantity:150,
      total_representation:35
    },
    {
      course_name:"Administração",
      period:"2020.1",
      student_quantity:150,
      total_representation:45
    },
    {
      course_name:"Engenharia de Produção",
      period:"2020.1",
      student_quantity:150,
      total_representation:60
    },
    {
      course_name:"Administração",
      period:"2020.1",
      student_quantity:150,
      total_representation:50
    },
    {
      course_name:"Engenharia de Produção",
      period:"2020.1",
      student_quantity:150,
      total_representation:20
    },
    {
      course_name:"Administração",
      period:"2020.1",
      student_quantity:150,
      total_representation:50
    },
    {
      course_name:"Engenharia de Produção",
      period:"2020.1",
      student_quantity:150,
      total_representation:20
    },
    {
      course_name:"Administração",
      period:"2020.1",
      student_quantity:150,
      total_representation:50
    },
    {
      course_name:"Engenharia de Produção",
      period:"2020.1",
      student_quantity:150,
      total_representation:20
    },
    {
      course_name:"Administração",
      period:"2020.1",
      student_quantity:150,
      total_representation:50
    },
    {
      course_name:"Engenharia de Produção",
      period:"2020.1",
      student_quantity:150,
      total_representation:20
    }
  ];


  @Output() exportCallback = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
    

  }

  export(){
    this.exportCallback.emit();
  }
  
  paginator(page_number:number){
    console.log("Está na página", page_number);
  }

  ngAfterViewInit(){
    for(let i = 0; i < this.data.length; i++){
      console.log('chart' + i, this.data[i].total_representation);
      this.genDoghnutChart('chart' + i, this.data[i].total_representation);

    }
  }

 


  genDoghnutChart(ctx_name, percentage:number){
    var ctx = document.getElementById(ctx_name);
    var myPieChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [],
        datasets: [
          {
            backgroundColor: ["#1951D1", "#EFF2F7"],
            data: [percentage, (100 - percentage)]
          }
        ]
      },
      options: {
        title: {
          display: false
        },
        legend: {
          display: false
        },
        tooltips: {
            enabled: false
        }
      }
    });
  }

  
}
