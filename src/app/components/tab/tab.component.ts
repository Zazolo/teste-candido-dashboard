import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  constructor() { }

  @Output() callback = new EventEmitter();

  tab_selected:number = 0

  ngOnInit(): void {
  }

  changeSelection(to:number){
    this.tab_selected = to;
    this.callback.emit(this.tab_selected);
  }
}
