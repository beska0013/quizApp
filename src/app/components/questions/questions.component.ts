import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})


export class QuestionsComponent implements OnInit {
  constructor() { }


  @Input() questions: object ={}
  @Input() loader:boolean = true;

  index: number = 0
  question:string = ''
  quizActive = true;
  answersArray = []
  isAnswered = false;
  error = false;
  score:number = 0;


  submit(){
    console.log(this.loader);
    if(this.isAnswered){
      this.renderQuestions();
      this.answersShuffle();
      this.isAnswered = false;
      this.error = false;
      }
    else { this.error = true }
    console.log(this.score);
  }


renderQuestions() {
  // @ts-ignore
  this.question = this.questions.results[this.index].question
  // @ts-ignore
  this.index >= this.questions.results.length - 1 ?
    setTimeout(()=> this.quizActive = !this.quizActive,300) : this.index++
}

answersShuffle(){
  // @ts-ignore
  this.answersArray = [ ...this.questions.results[this.index].incorrect_answers]
    // @ts-ignore
  this.answersArray.push(this.questions.results[this.index].correct_answer)
  //shuffle formul//
  for (let i = this.answersArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * this.answersArray.length);
    [this.answersArray[i], this.answersArray[j]] = [this.answersArray[j], this.answersArray[i]];
  }
}

checkAnswer(e:any){
  const answers = document.querySelectorAll('.answer') as unknown as HTMLElement[];
    answers.forEach(answer =>{
    // @ts-ignore
    this.questions.results[this.index].correct_answer === answer.innerHTML ?
      answer.style.backgroundColor = '#35496f':
      answer.style.backgroundColor = '#ff0032';
    })
  // @ts-ignore
  e.target.innerHTML ===  this.questions.results[this.index].correct_answer? this.score++ : null
  this.isAnswered = true;
}

  ngOnInit(): void {
    console.log(this.loader);
    this.renderQuestions()
    this.answersShuffle();
  }

}
