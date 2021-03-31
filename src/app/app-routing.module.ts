import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TarefaRoutes } from './tarefas/tarefas-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/tarefas/listar', pathMatch: 'full' },
  ...TarefaRoutes
  // { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }