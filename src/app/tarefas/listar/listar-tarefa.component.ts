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

    // this.tarefas = [
    //   new Tarefa(1, "Tarefa 1", false),
    //   new Tarefa(2, "Tarefa 2", true),
    //   new Tarefa(3, "Tarefa 3", true)
    // ];
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();

    if(confirm("Dejesa remover a tarefa " + tarefa.nome + "?")) {
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }

  alterarStatus(tarefa: Tarefa): void {
    if(confirm("Dejesa alterar o status da tarefa " + tarefa.nome + "?")) {
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }

}
