import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
  selector: 'courses',
  template: `
    <h2>{{ "Title: " + title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{course}}
      </li>
    </ul>
    <h3> Bootstrap: </h3>
    <button class="btn btn-primary" >Save</button>

    <h3> Class Binding: </h3>
    <button class="btn btn-primary" [class.active]="isActive">Save</button>

    <h3> Style Binding: </h3>
    <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'white' ">Save</button>

    <div (click)="onDivClicked()">
      <h3> Event Binding & Bubbling: </h3>
      <button class="btn btn-primary" (click)="onSave($event)"  >Save</button>
    </div>

    <h3> Event Filtering: </h3>
    <input (keyup.enter)="onKeyUp()" />
  `
})
export class CoursesComponent {
  title = "List of courses";
  courses;
  isActive = true;

  onDivClicked(){
    console.log("Div was clicked");
  }

  onSave($event){
    $event.stopPropagation();
    console.log("Button was clicked", $event);
  }

  onKeyUp() {
    console.log("Enter was pressed")
  }

  constructor(service: CoursesService) {

    // let service = new CoursesService();
    this.courses = service.getCourses();
  }
}
