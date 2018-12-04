import { Component, OnInit } from '@angular/core';
//import { TimerObservable } from 'rxjs/observable/TimerObservable';

@Component({
  selector: 'app-word-scramble',
  templateUrl: './word-scramble.component.html',
  styleUrls: ['./word-scramble.component.css']
})
export class WordScrambleComponent implements OnInit {

  constructor() { }
  ticks = 0;
  ngOnInit() {
    //let timer = TimerObservable.create(0);

  }

}
