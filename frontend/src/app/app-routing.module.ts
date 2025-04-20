import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarEspecialidadesComponent } from './listar-especialidades/listar-especialidades.component';
import { FormEspecialidadeComponent } from './form-especialidade/form-especialidade.component';
import { ListarProfissionaisComponent } from './listar-profissionais/listar-profissionais.component';
import { FormProfissionaisComponent } from './form-profissionais/form-profissionais.component';

const routes: Routes = [
  {
    path: 'especialidades',
    component: ListarEspecialidadesComponent
  },
  {
    path: 'especialidades/form/:id',
    component: FormEspecialidadeComponent
  },
  {
    path: 'profissionais',
    component: ListarProfissionaisComponent
  },
  {
    path: 'profissionais/form',
    component: FormProfissionaisComponent
  },
  {
    path: 'profissionais/form/:id',
    component: FormProfissionaisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
