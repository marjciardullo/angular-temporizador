import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { TemporizadorComponent } from './temporizador/temporizador.component';
import { RouterModule } from '@angular/router';
import { LogComponent } from './log/log.component';
import { TemporizadorService } from './temporizador.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: TemporizadorComponent },
      { path: 'disciplinas', component: DisciplinasComponent },
      { path: 'log', component: LogComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    DisciplinasComponent,
    TemporizadorComponent,
    LogComponent,
  ],
  bootstrap: [AppComponent],
  providers: [TemporizadorService],
})
export class AppModule {}
