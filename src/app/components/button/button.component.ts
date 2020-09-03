import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() width:string = 'auto';
  @Input() type:string = 'normal';
  @Input() icon_left:string = '';
  @Input() icon_right:string = '';
  @Input() role:string = '';
  @Output() callback = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  execute(){
    this.callback.emit();
  }

}
