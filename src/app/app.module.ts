import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { TemporizadorComponent } from './temporizador/temporizador.component';
import { RouterModule } from '@angular/router';
import { TemporizadorService } from './temporizador.service';
import { DisciplinasService } from './disciplinas.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: TemporizadorComponent },
      { path: 'disciplinas', component: DisciplinasComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    DisciplinasComponent,
    TemporizadorComponent,
  ],
  bootstrap: [AppComponent],
  providers: [TemporizadorService, DisciplinasService],
})
export class AppModule {}
