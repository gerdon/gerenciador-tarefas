import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { TarefasModule } from './tarefas/tarefas.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    TarefasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
