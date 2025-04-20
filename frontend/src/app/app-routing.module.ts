import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarEspecialidadesComponent } from './listar-especialidades/listar-especialidades.component';
import { FormEspecialidadeComponent } from './form-especialidade/form-especialidade.component';
import { ListarProfissionaisComponent } from './listar-profissionais/listar-profissionais.component';
import { FormProfissionaisComponent } from './form-profissionais/form-profissionais.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { FormUsuariosComponent } from './form-usuarios/form-usuarios.component';
import { ListarAgendamentosComponent } from './listar-agendamentos/listar-agendamentos.component';
import { FormAgendamentosComponent } from './form-agendamentos/form-agendamentos.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path: 'especialidades',
    component: ListarEspecialidadesComponent
  },
  {
    path: 'especialidades/form',
    component: FormEspecialidadeComponent
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
  },
  {
    path: 'usuarios',
    component: ListarUsuariosComponent
  },
  {
    path: 'usuarios/form',
    component: FormUsuariosComponent
  },
  {
    path: 'usuarios/form/:id',
    component: FormUsuariosComponent
  },
  {
    path: 'agendamentos',
    component: ListarAgendamentosComponent
  },
  {
      path: 'agendamentos/form',
    component: FormAgendamentosComponent
  },
  {
    path: 'agendamentos/form/:id',
    component: FormAgendamentosComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
