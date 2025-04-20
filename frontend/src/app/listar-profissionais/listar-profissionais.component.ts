import { Component } from '@angular/core';
import { Profissional } from '../models/profissional';
import { ProfissionaisService } from '../services/profissionais.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-profissionais',
  standalone: false,
  templateUrl: './listar-profissionais.component.html',
  styleUrl: './listar-profissionais.component.css',
})
export class ListarProfissionaisComponent {
  profissionais: Profissional[] = [];

  constructor(
    private profissionalService: ProfissionaisService,
    private router: Router
  ) {
    this.profissionalService
      .listarProfissionais()
      .subscribe((profissionais) => {
        this.profissionais = profissionais;
      });
  }

  adicionarProfissional() {
    this.router.navigate(['/profissionais/form']);
  }

  editarProfissional(id: string) {
    this.router.navigate(['/profissionais/form', id]);
  }

  deletarProfissional(id: string) {
    this.profissionalService.deletarProfissional(id).subscribe(() => {
      this.profissionais = this.profissionais.filter((p) => p.id !== id);
    });
  }
}
