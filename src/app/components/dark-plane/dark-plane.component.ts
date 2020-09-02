import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dark-plane',
  templateUrl: './dark-plane.component.html',
  styleUrls: ['./dark-plane.component.scss']
})
export class DarkPlaneComponent implements OnInit {

  @Input() enabled:boolean = false;

  constructor() { }

  /*
  hide(){
    this.enabled = false;
  }
  */
  
  ngOnInit(): void {
  }

}
