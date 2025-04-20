import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AgendamentosService } from '../services/agendamentos.service';
import { Agendamento } from '../models/agendamentos';

@Component({
  selector: 'app-listar-agendamentos',
  standalone: false,
  templateUrl: './listar-agendamentos.component.html',
  styleUrl: './listar-agendamentos.component.css',
})
export class ListarAgendamentosComponent {
  agendamentos: Agendamento[] = [];

  constructor(
    private agendamentosService: AgendamentosService,
    private router: Router
  ) {
    this.agendamentosService.listarAgendamentos().subscribe((agendamentos) => {
      this.agendamentos = agendamentos;
    });
  }

  adicionarAgendamento() {
    this.router.navigate(['/agendamentos/form']);
  }

  editarAgendamento(id: string) {
    this.router.navigate(['/agendamentos/form', id]);
  }

  excluirAgendamento(id: string) {
    this.agendamentosService.deletarAgendamento(id).subscribe(() => {
      this.agendamentos = this.agendamentos.filter((a) => a.id !== id);
    });
  }
}
