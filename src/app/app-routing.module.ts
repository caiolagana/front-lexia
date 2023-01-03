import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArquivosComponent } from './components/arquivos/arquivos.component';
import { EstatisticasComponent } from './components/estatisticas/estatisticas.component';
import { OperacoesComponent } from './components/operacoes/operacoes.component';

const routes: Routes = [
  {
    path: 'operacoes',
    component: OperacoesComponent
  },
  {
    path: 'arquivos',
    component: ArquivosComponent
  },
  {
    path: 'estatisticas',
    component: EstatisticasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
