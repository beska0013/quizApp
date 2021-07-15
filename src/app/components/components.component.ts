import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";



@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})




export class ComponentsComponent implements OnInit {

  res: Object = [];
  category:string = '';
  difficulty:string = '';
  QUIZ_API:string= 'https://opentdb.com/api.php?amount=10';
  loading = true;
  errorMessage = "";
  active:boolean = true

  constructor(private http:HttpClient) {}


  getCategory():string {

    return this.category;
  }

  getDifficulty():string {return this.difficulty}

  getQuestions(){
    this.http.get(this.QUIZ_API+`&category=${this.getCategory()}`+`&difficulty=${this.getDifficulty()}`)
      .subscribe(response =>{
          this.res = response
        },
        (error) => {
          console.error('error loading')
          this.errorMessage = error;
          this.loading = false;
          console.log(this.errorMessage);
        })
  }

  activateQuiz(){
   const startMenu = document.getElementById('startMenu');
   startMenu? startMenu.style.opacity ='0': null;
    this.getQuestions()
    setTimeout(()=> this.active = !this.active,700)
    }







  ngOnInit(): void {}

}
