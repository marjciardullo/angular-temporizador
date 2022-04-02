import { Injectable } from '@angular/core';
interface Task {
  title: string;
  horario: number;
  diaSemana: string;
}

@Injectable()
export class DisciplinasService {
  list: Array<Task> = [];
  constructor() {}

  getList() {
    return this.list;
  }

  add(title: string, horario: number, diaSemana: string) {
    this.list.push({ title, horario, diaSemana });
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }
}
