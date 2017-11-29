import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewMode = "other";

  clowns = [
    {id: 1, name: "Bingo"},
    {id: 2, name: "Bozo"},
    {id: 3, name: "Gacy"}
  ];

  courses = [1, 2];

  tweet = {
    body: "Here is the body",
    isLiked: true,
    likesCount: 10
  }

  title: string;

  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChange(eventArgs: FavoriteChangedEventArgs ) {
    console.log("Favorite changed: ", eventArgs);
  }

  onAdd() {
    this.clowns.push({id: 4, name: "Helmut"});
  }

  onRemove(clown) {
    let index = this.clowns.indexOf(clown);
    this.clowns.splice(index, 1);
  }

  onChange(clown) {
    clown.name = "Updated";
  }

}
