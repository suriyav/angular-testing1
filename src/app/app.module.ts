import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import {FormsModule} from '@angular/forms';
import {} from './service/todo.service';
import { TodoService } from './services/todo.service';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';

const appRoutes:Routes = [
{path:"", component:UserComponent},
{path:"about", component:AboutusComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
