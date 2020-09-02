import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { DropMenuDataDto } from '../../model/drop-menu-data-dto'
@Component({
  selector: 'app-drop-down-menu',
  templateUrl: './drop-down-menu.component.html',
  styleUrls: ['./drop-down-menu.component.scss']
})
export class DropDownMenuComponent implements OnInit {

  @Input() width:string = '350px';
  @Input() data:DropMenuDataDto[] = [];
  @Input() icon:string = '';
  @Output() callback = new EventEmitter<string|number>();

  options_visibility:boolean = false;
  selected_item_text:string = '';
  opt_selected:DropMenuDataDto = {value:0, label:'Default'};
  icon_name:string = 'calendar_today';
  constructor() { }

  ngOnInit(): void {
    this.changeOptionsVisibility(false, {value:0, label:'Default'});
  }

  changeOptionsVisibility(v:boolean, obj:DropMenuDataDto){
    this.select(obj.value);
    this.selected_item_text = obj.label;
    this.opt_selected = obj;
    this.options_visibility = v;
    console.log("Visibility changed", v, obj.label);
  }

  select(opt:string|number){
    
    if(opt != this.opt_selected.value){
      console.log("Opção selecionada.");
      this.callback.emit(opt);
    }
    
  }
}
