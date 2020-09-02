import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HeaderComponent } from './header/header.component';

///pages always in the end
import { MainComponent } from '../screens/main/main.component';



@NgModule({
  declarations: [SideMenuComponent, HeaderComponent, MainComponent],
  exports:[SideMenuComponent, HeaderComponent, MainComponent],
  entryComponents:[SideMenuComponent, HeaderComponent, MainComponent],
  
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
