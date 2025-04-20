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

@NgModule({
  declarations: [
    AppComponent,
    ListarEspecialidadesComponent,
    FormEspecialidadeComponent,
    ListarProfissionaisComponent,
    FormProfissionaisComponent,
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
