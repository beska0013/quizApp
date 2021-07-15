import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routes,RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import {ServiceService} from "./service.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { QuestionsComponent } from './components/questions/questions.component';
import { QuizResultComponent } from './components/quiz-result/quiz-result.component';
import { HomeComponent } from './components/home/home.component';
import { LoaderComponent } from './components/loader/loader.component';

const appRoutes = [
  {path: '', component: HomeComponent},
  {path:'options', component:  ComponentsComponent},
  {path: 'questions',component: QuestionsComponent},
  {path: 'quizEnd',component: QuizResultComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    QuestionsComponent,
    QuizResultComponent,
    HomeComponent,
    LoaderComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
