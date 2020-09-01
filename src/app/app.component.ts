import { Component } from '@angular/core';
import { Course } from './model/course';
import { DataGenerator } from './mock/data-generator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teste-candido-dashboard';

  data:Course[];

  constructor(){
    let dg = new DataGenerator();
    this.data = dg.getCourses();
    console.log(this.data);
  }

}
