import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  active:boolean = false;

  constructor() { }

  switchActiveStatus(){
    (this.active) ? this.active = false : this.active = true;
    console.log("Mudança do estado do menu.", this.active);
  }
  ngOnInit(): void {
  }

}
