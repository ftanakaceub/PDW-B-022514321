import { Component } from '@angular/core';
import { Especialidade } from '../models/especialidade';
import { EspecialidadeService } from '../services/especialidade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-especialidades',
  standalone: false,
  templateUrl: './listar-especialidades.component.html',
  styleUrl: './listar-especialidades.component.css'
})
export class ListarEspecialidadesComponent {
  especialidades: Especialidade[] = [];

  constructor(private especialidadeService: EspecialidadeService, private router: Router) {
    this.especialidadeService.listarEspecialidades().subscribe(especialidades => {
      this.especialidades = especialidades;
    });
  }

  adicionarEspecialidade() {
    this.router.navigate(['/especialidades/form']);
  }

  editarEspecialidade(id: string) {
    this.router.navigate(['/especialidades/form', id]);
  }

  deletarEspecialidade(id: string) {
    this.especialidadeService.deletarEspecialidade(id).subscribe(() => {
      this.especialidades = this.especialidades.filter(e => e.id !== id);
    });
  }
}
