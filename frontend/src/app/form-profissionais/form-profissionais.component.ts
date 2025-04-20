import { Component, OnInit } from '@angular/core';
import { Profissional } from '../models/profissional';
import { ProfissionaisService } from '../services/profissionais.service';
import { Router } from '@angular/router';
import { EspecialidadeService } from '../services/especialidade.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-profissionais',
  standalone: false,
  templateUrl: './form-profissionais.component.html',
  styleUrl: './form-profissionais.component.css',
})
export class FormProfissionaisComponent implements OnInit {
  profissionalForm: FormGroup;
  profissional: Profissional = {
    nome: '',
    especialidade_nome: '',
  };
  especialidades: any[] = [];
  isEditMode = false;
  profissionalId: string | null = null;

  constructor(
    private profissionaisService: ProfissionaisService,
    private especialidadeService: EspecialidadeService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.profissionalForm = this.fb.group({
      nome: ['', [Validators.required]],
      especialidade_id: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.carregarEspecialidades();
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isEditMode = true;
        this.profissionalId = params['id'];
        this.carregarProfissional();
      }
    });
  }

  carregarEspecialidades() {
    this.especialidadeService.listarEspecialidades().subscribe(
      (especialidades) => {
        this.especialidades = especialidades;
      },
      (error) => {
        console.error('Erro ao carregar especialidades:', error);
      }
    );
  }

  carregarProfissional() {
    if (this.profissionalId) {
      this.profissionaisService
        .obterProfissional(this.profissionalId)
        .subscribe(
          (profissional) => {
            this.profissionalForm.patchValue({
              nome: profissional.nome,
              especialidade_id: this.especialidades.find(
                (e) => e.nome === profissional.especialidade_nome
              )?.id
            });
          },
          (error) => {
            console.error('Erro ao carregar profissional:', error);
          }
        );
    }
  }

  salvar() {
    if (this.profissionalForm.valid) {
      const profissionalData = this.profissionalForm.value;

      if (this.isEditMode && this.profissionalId) {
        this.profissionaisService
          .atualizarProfissional(this.profissionalId, profissionalData)
          .subscribe({
            next: () => {
              this.router.navigate(['/profissionais']);
            },
            error: (error) => {
              console.error('Erro ao atualizar profissional:', error);
            }
          });
      } else {
        this.profissionaisService
          .criarProfissional(profissionalData)
          .subscribe({
            next: () => {
              this.router.navigate(['/profissionais']);
            },
            error: (error) => {
              console.error('Erro ao criar profissional:', error);
            }
          });
      }
    }
  }

  cancelar() {
    this.router.navigate(['/profissionais']);
  }
}
