import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DropMenuDataDto } from 'src/app/model/drop-menu-data-dto';
@Component({
  selector: 'app-month-filter',
  templateUrl: './month-filter.component.html',
  styleUrls: ['./month-filter.component.scss']
})
export class MonthFilterComponent implements OnInit {

  @Output() callback = new EventEmitter();

  months:DropMenuDataDto[] = [
    {value:0, label:"Janeiro"},
    {value:1, label:"Fevereiro"},
    {value:2, label:"Março"},
    {value:3, label:"Abril"},
    {value:4, label:"Maio"},
    {value:5, label:"Junho"},
    {value:6, label:"Julho"},
    {value:7, label:"Agosto"},
    {value:8, label:"Setembro"},
    {value:9, label:"Outubro"},
    {value:10, label:"Novembro"},
    {value:11, label:"Dezembro"}
  ];

  selectMonth(month:number){
    this.callback.emit(month);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
