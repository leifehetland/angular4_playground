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
    <input [value]="email" (keyup.enter)="email = $event.target.value ;onKeyUp()" />

    <h3> Two Way Binding: </h3>
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />

    <div style="color: blue;">{{ text | summary:10 }}</div>
  `
})
export class CoursesComponent {
  title = "List of courses";
  text = "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn. K'yarnaknyth athg csll'ha Shub-Niggurath, Hastur Tsathoggua gnaiih ep uaaah vulgtm chtenff n'ghft hafh'drn tharanak, hupadgh 'aiyar syha'h nog uln chtenff geb stell'bsna. H'ebunma goka y'hah n'gha ehye kadishtu nog syha'h hrii, Cthulhu li'hee fm'latgh ngTsathoggua ilyaa f'hafh'drn hafh'drn, 'ai lloig nnnuln grah'n ep yayar lw'nafh. Cshagg ph'k'yarnak gnaiih ya li'hee gotha chtenff throdor hai, ya Shub-Niggurathnyth ooboshu chai ah nnny'hah 'ai orr'e R'lyeh, hrii hai vulgtlagln hrii lloig ya cTsathoggua. Geb ngy'hah ehye li'hee nilgh'ri ph'ooboshu lw'nafh y-ftaghu Nyarlathotep athg, Yoggothoth 'aior grah'n y-uln hai ilyaa shogg hupadgh ehye, h'gof'nn 'ai ehye kadishtu hlirgh hai Chaugnar Faugn nnnnilgh'ri. ";
  courses;
  isActive = true;
  email = "Hello World";

  onDivClicked(){
    console.log("Div was clicked");
  }

  onSave($event){
    $event.stopPropagation();
    console.log("Button was clicked", $event);
  }

  onKeyUp() {
    console.log(this.email);
  }

  constructor(service: CoursesService) {

    // let service = new CoursesService();
    this.courses = service.getCourses();
  }
}
