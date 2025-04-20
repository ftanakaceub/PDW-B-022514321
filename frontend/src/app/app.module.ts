import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarEspecialidadesComponent } from './listar-especialidades/listar-especialidades.component';
import { FormEspecialidadeComponent } from './form-especialidade/form-especialidade.component';
import { ListarProfissionaisComponent } from './listar-profissionais/listar-profissionais.component';
import { FormProfissionaisComponent } from './form-profissionais/form-profissionais.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { FormUsuariosComponent } from './form-usuarios/form-usuarios.component';
import { ListarAgendamentosComponent } from './listar-agendamentos/listar-agendamentos.component';
import { FormAgendamentosComponent } from './form-agendamentos/form-agendamentos.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarEspecialidadesComponent,
    FormEspecialidadeComponent,
    ListarProfissionaisComponent,
    FormProfissionaisComponent,
    ListarUsuariosComponent,
    FormUsuariosComponent,
    ListarAgendamentosComponent,
    FormAgendamentosComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
