import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Chart} from 'chart.js';
@Component({
  selector: 'app-pyramid-chart',
  templateUrl: './pyramid-chart.component.html',
  styleUrls: ['./pyramid-chart.component.scss']
})
export class PyramidChartComponent implements OnInit {

  constructor() { }
  @Output() exportCallback = new EventEmitter();

  export(){
    this.exportCallback.emit();
  }
  ngOnInit(){}

  ngAfterViewInit(){
    this.startLineChart();
  }

  startLineChart(){
    var ctx = document.getElementById('chartContextHTML');
    var myChart = new Chart('chartContextHTML', {
        type: 'line',
        
        data: {
          labels: ['04/09/2020', '05/09/2020', '06/09/2020', '07/09/2020', '08/09/2020', '09/09/2020', '10/09/2020'],
          datasets: [{
            backgroundColor: 'white',
            borderColor: 'blue',
            data: [
              3, 10, 5, 7, 1, 8, 4
            ],
            fill: false,
          }]
        },
        options: {
          layout:{
            padding: 5
          },
          responsive: true,
          title: {
            display: false,
            text: ''
          },
          tooltips: {
            mode: 'index',
            intersect: false,
            displayColors:false
          },
          hover: {

            mode: 'nearest',
            intersect: false
          },
          elements: {
            line:{
              backgroundColor: "#ffffff",
              borderColor: "#B1C8FF",
              borderWidth: 2,
              tension: .01
            },
            point:{
              borderWidth: 3,

            }

            
          },
          
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
                gridLines: {
                    display:false
                }
            }],
            yAxes: [{
                gridLines: {
                  display:true,
                  color:"#EFF2F7"
                }   
            }]
        }
          
        }
    });


  }


}
