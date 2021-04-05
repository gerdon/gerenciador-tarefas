import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TarefaService } from './shared/tarefa.service';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import { CadastrarTarefaComponent } from './cadastrar/cadastrar-tarefa.component';


@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    TarefaService
  ],
  exports: [
    ListarTarefaComponent,
    CadastrarTarefaComponent
  ]
})
export class TarefasModule { }
