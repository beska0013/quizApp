import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router ) {}

  activateQuiz = () => {
    this.squareFadeOut();
    this.lettersFadeout();
    setTimeout(()=> this.router.navigateByUrl('/options'),300)
  }

  squareFadeOut = () =>{
    const square = document.querySelector('.quizStart') as HTMLElement;
    for(let i = 0; i < square?.children.length;i++){
      let num1 = Math. floor(Math. random()*(1000 - (-1000 )+ 1) + (-1000));
      let num2 = Math. floor(Math. random()*(1000 - (-300 )+ 1) + (-1000));
      (square?.children[i] as any).style.transform =`translate(${num1 + 'px'},${num2 + 'px'})`;
      (square?.children[i] as any).style.opacity =`0`;
    }
  }
  lettersFadeout = () =>{
    const letters = document.querySelectorAll('.let')
    letters.forEach( (l:any) => {
      let num1 = Math. floor(Math. random()*(1000 - (-1000 )+ 1) + (-1000))
      let num2 = Math. floor(Math. random()*(1000 - (-300 )+ 1) + (-1000))
      l.style.transform = `translate(${num1 + 'px'},${num2 + 'px'}) rotate(180deg) scale(10)`;
      l.style.opacity =`0`;
      l.style.position = `absolute`;
    })

  }
  ngOnInit(): void {
  }

}
