import { Component, OnInit } from '@angular/core';
import { TemporizadorService } from '../temporizador.service';

@Component({
  selector: 'app-temporizador',
  templateUrl: './temporizador.component.html',
  styleUrls: ['./temporizador.component.css'],
})
export class TemporizadorComponent implements OnInit {
  seconds: number;
  constructor(public temporizador: TemporizadorService) {
    this.seconds = 0;
  }

  ngOnInit() {}

  setSeconds(seconds: number) {
    this.seconds = seconds;
  }
}
