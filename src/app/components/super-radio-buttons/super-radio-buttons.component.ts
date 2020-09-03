import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-super-radio-buttons',
  templateUrl: './super-radio-buttons.component.html',
  styleUrls: ['./super-radio-buttons.component.scss']
})
export class SuperRadioButtonsComponent implements OnInit {

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
