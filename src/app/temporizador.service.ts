import { Injectable } from '@angular/core';

@Injectable()
export class TemporizadorService {
  private timer: any;
  private counter = 0;

  constructor() {}

  start(ms: number) {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.counter++;
      }, ms);
    }
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
      this.counter = 0;
    }
  }

  getCount() {
    return this.counter;
  }
}
