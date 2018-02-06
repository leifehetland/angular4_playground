import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors/authors.component';

import { CoursesService } from './courses.service';
import { AuthorsService } from './authors.service';

import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component'
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostsComponent } from './posts/posts.component'
import { PostService } from './services/post.service'
import { AppError } from './common/app-error';
import { AppErrorHandler } from './common/app-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule

  ],
  providers: [
    CoursesService,
    AuthorsService,
    PostService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
