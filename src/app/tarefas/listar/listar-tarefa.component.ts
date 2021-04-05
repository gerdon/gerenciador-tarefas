import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../shared/tarefa.model';
import { TarefaService } from '../shared/tarefa.service';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
    // localStorage['tarefas'] = [];
    // this.tarefaService.cadastrar({ "id": 1, "nome": "Tarefa 1", "concluida": false });

    this.tarefas = [
      new Tarefa(1, "Tarefa 1", false),
      new Tarefa(2, "Tarefa 2", true),
      new Tarefa(3, "Tarefa 3", true)
    ];
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

}
