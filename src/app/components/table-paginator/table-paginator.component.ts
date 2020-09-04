import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-paginator',
  templateUrl: './table-paginator.component.html',
  styleUrls: ['./table-paginator.component.scss']
})
export class TablePaginatorComponent implements OnInit {

  @Input() quantity:number = 3;
  pages:number[] = [];
  active = 1;
  @Output() callback = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    let qt = this.quantity;
    while(this.pages.length <= qt+1){
      this.pages.push(qt);
      qt--;
    }
  }

  goAhead(){
    if(this.active < this.quantity-1) this.active++;
    this.emit();
  }

  goBack(){
    if(this.active > 0) this.active--;
    this.emit();
  }

  emit(){
    this.callback.emit(this.active+1);
  }



}
