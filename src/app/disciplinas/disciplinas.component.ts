import { Component, OnInit } from '@angular/core';
import { DisciplinasService } from '../disciplinas.service';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css'],
})
export class DisciplinasComponent implements OnInit {
  title: string;
  horario: number;
  diaSemana: string;
  constructor(public disciplinas: DisciplinasService) {
    this.title = '';
    this.horario = 0;
    this.diaSemana = '';
  }

  ngOnInit() {}
}
