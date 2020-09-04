import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-super-radio-buttons-export',
  templateUrl: './super-radio-buttons-export.component.html',
  styleUrls: ['./super-radio-buttons-export.component.scss']
})
export class SuperRadioButtonsExportComponent implements OnInit {

  selected:number = 1;

  @Output() callback = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
    this.execute(1);
  }

  execute(opt:number){
    this.selected = opt;
    this.callback.emit(opt);
  }

}
