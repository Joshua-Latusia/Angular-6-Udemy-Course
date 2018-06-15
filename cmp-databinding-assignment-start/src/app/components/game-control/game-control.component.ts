import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  interval;
  @Output() incrementNumber = new EventEmitter<number>();
  number = 0;


  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.interval = setInterval(() => {
      this.incrementNumber.emit(this.number);
      this.number++;
    }, 1000);
  }

  stopGame() {
    clearInterval(this.interval);
  }

}
