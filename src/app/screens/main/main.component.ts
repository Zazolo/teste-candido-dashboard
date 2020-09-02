import { Component, OnInit } from '@angular/core';
import { DropMenuDataDto } from 'src/app/model/drop-menu-data-dto';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  periods_available:DropMenuDataDto[] = [];
  constructor() { }

  ngOnInit(): void {
    this.periods_available.push({label:"2020.1", value:1});
  }

  menuPeriodSelect(option:number){
    console.log(option);
  }

}
