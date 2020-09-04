import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dark-plane',
  templateUrl: './dark-plane.component.html',
  styleUrls: ['./dark-plane.component.scss']
})
export class DarkPlaneComponent implements OnInit {

  @Input() enabled:boolean = false;
  @Output() callback = new EventEmitter();
  constructor() { }

  /*
  hide(){
    this.enabled = false;
  }
  */
  
  ngOnInit(): void {
  }

  click(){
    this.callback.emit();
  }

}
