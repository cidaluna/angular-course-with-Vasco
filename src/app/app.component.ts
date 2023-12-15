import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { COURSES } from '../../db-data';
import { CardComponent } from "./card/card.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, CardComponent]
})
export class AppComponent {
  data = {
    title: 'Angular Course with Vasco',
  }


  coreCourse = COURSES[0];
  rxjsCourse = COURSES[1];
  ngrxCourse = COURSES[2];

  onLogoClicked(){
    alert("The logo was clicked!")
  }

  onKeyUp(newTitle: string){
    this.data.title = newTitle;
  }

}
