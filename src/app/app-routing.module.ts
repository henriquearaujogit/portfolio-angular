import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { SobreComponent } from './sobre/sobre.component';
import { TodoHomeComponent } from './todo-home/todo-home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projetos', component: ProjetosComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'contato', component: SobreComponent},
  {path: 'todo/:user_id', component: TodoHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
