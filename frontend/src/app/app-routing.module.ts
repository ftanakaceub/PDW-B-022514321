import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarEspecialidadesComponent } from './listar-especialidades/listar-especialidades.component';
import { FormEspecialidadeComponent } from './form-especialidade/form-especialidade.component';

const routes: Routes = [
  {
    path: 'especialidades',
    component: ListarEspecialidadesComponent
  },
  {
    path: 'especialidades/form/:id',
    component: FormEspecialidadeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
