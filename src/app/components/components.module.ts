import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HeaderComponent } from './header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
///pages always in the end
import { MainComponent } from '../screens/main/main.component';
import { DarkPlaneComponent } from './dark-plane/dark-plane.component';
import { DropDownMenuComponent } from './drop-down-menu/drop-down-menu.component';
import { SuperRadioButtonsComponent } from './super-radio-buttons/super-radio-buttons.component';
import { ButtonComponent } from './button/button.component';
import { TableSimpleComponent } from './table-simple/table-simple.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { ModalTableExportComponent } from './modal/modal-table-export/modal-table-export.component';
import { ModalTableViewStudentComponent } from './modal/modal-table-view-student/modal-table-view-student.component';
import { SuperRadioButtonsExportComponent } from './super-radio-buttons-export/super-radio-buttons-export.component';
import { TablePaginatorComponent } from './table-paginator/table-paginator.component';
import { TableMediumComponent } from './table-medium/table-medium.component';
import { MonthFilterComponent } from './month-filter/month-filter.component';
import { TableHardComponent } from './table-hard/table-hard.component';
import { TableUltraHardComponent } from './table-ultra-hard/table-ultra-hard.component';
import { TabComponent } from './tab/tab.component';
import { PyramidChartComponent } from './pyramid-chart/pyramid-chart.component';



@NgModule({
  declarations: [SideMenuComponent, HeaderComponent, MainComponent, DarkPlaneComponent, DropDownMenuComponent, SuperRadioButtonsComponent, ButtonComponent, TableSimpleComponent, SearchInputComponent, ModalTableExportComponent, ModalTableViewStudentComponent, SuperRadioButtonsExportComponent, TablePaginatorComponent, TableMediumComponent, MonthFilterComponent, TableHardComponent, TableUltraHardComponent, TabComponent, PyramidChartComponent],
  exports:[SideMenuComponent, HeaderComponent, MainComponent],
  entryComponents:[SideMenuComponent, HeaderComponent, MainComponent, ModalTableExportComponent, ModalTableViewStudentComponent],
  
  imports: [
    MatIconModule,
    MatMenuModule,
    CommonModule
  ]
})
export class ComponentsModule { }
