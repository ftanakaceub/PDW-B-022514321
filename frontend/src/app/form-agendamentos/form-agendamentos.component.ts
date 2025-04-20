import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AgendamentosService } from '../services/agendamentos.service';
import { Profissional } from '../models/profissional';
import { Usuario } from '../models/usuarios';
import { ProfissionaisService } from '../services/profissionais.service';
import { UsuariosService } from '../services/usuarios.service';
import { combineLatest, forkJoin } from 'rxjs';

@Component({
  selector: 'app-form-agendamentos',
  standalone: false,
  templateUrl: './form-agendamentos.component.html',
  styleUrl: './form-agendamentos.component.css',
})
export class FormAgendamentosComponent {
  agendamentoForm: FormGroup;
  isEditMode = false;
  agendamentoId: string | null = null;
  profissionais: Profissional[] = [];
  usuarios: Usuario[] = [];

  constructor(
    private agendamentosService: AgendamentosService,
    private profissionaisService: ProfissionaisService,
    private usuariosService: UsuariosService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.agendamentoForm = this.fb.group({
      data_hora: ['', [Validators.required]],
      profissional_id: ['', [Validators.required]],
      usuario_id: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isEditMode = true;
        this.agendamentoId = params['id'];
      }

      combineLatest([
        this.profissionaisService.listarProfissionais(),
        this.usuariosService.listarUsuarios(),
      ]).subscribe((resposta) => {
        this.profissionais = resposta[0];
        this.usuarios = resposta[1];
        this.carregarAgendamento();
      });
    });
  }

  carregarAgendamento() {
    if (this.agendamentoId) {
      this.agendamentosService
        .obterAgendamento(this.agendamentoId)
        .subscribe((agendamento) => {
          this.agendamentoForm.patchValue({
            data_hora: new Date(agendamento.data_hora)
              .toISOString()
              .slice(0, 16),
            profissional_id: this.profissionais.find(
              (p) => p.nome == agendamento.profissional_nome
            )?.id,
            usuario_id: this.usuarios.find(
              (u) => u.nome == agendamento.usuario_nome
            )?.id
          });
        });
    }
  }

  salvar() {
    if (this.agendamentoForm.valid) {
      const agendamentoData = this.agendamentoForm.value;

      if (this.isEditMode && this.agendamentoId) {
        this.agendamentosService
          .atualizarAgendamento(this.agendamentoId, agendamentoData)
          .subscribe({
            next: () => {
              this.router.navigate(['/agendamentos']);
            },
            error: (error) => {
              console.error('Erro ao atualizar agendamento:', error);
            },
          });
      } else {
        this.agendamentosService.criarAgendamento(agendamentoData).subscribe({
          next: () => {
            this.router.navigate(['/agendamentos']);
          },
          error: (error) => {
            console.error('Erro ao criar agendamento:', error);
          },
        });
      }
    }
  }

  cancelar() {
    this.router.navigate(['/agendamentos']);
  }
}
