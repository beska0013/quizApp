import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.scss']
})
export class QuizResultComponent implements OnInit {

  constructor(private router: Router ) { }

  @Input() newScore: number = 0;
  @Output() passNewQuiz = new EventEmitter<boolean>();

  addNewItem(value: boolean) {
    this.passNewQuiz.emit(value);
  }



  newQuiz:boolean = false;
 startNewQuiz = () => {
   this.newQuiz = !this.newQuiz;
   this.addNewItem(this.newQuiz)
   setTimeout(()=> this.router.navigateByUrl(''),300)
 }


  ngOnInit(): void {
    const resultNumber = document.getElementById('result')
  // @ts-ignore
    this.newScore > 0 ? resultNumber.style.color = '#3cff00': resultNumber.style.color='#ff0032';
  }

}
