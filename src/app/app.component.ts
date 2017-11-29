import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewMode = "other";

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
}
