import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EspecialidadeService } from '../services/especialidade.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-especialidade',
  templateUrl: './form-especialidade.component.html',
  styleUrls: ['./form-especialidade.component.css'],
  standalone: false,
})
export class FormEspecialidadeComponent implements OnInit {
  especialidadeForm: FormGroup;
  isEditMode = false;
  especialidadeId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private especialidadeService: EspecialidadeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.especialidadeForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.especialidadeId = params['id'];
        this.loadEspecialidade();
      }
    });
  }

  loadEspecialidade() {
    if (this.especialidadeId) {
      this.especialidadeService.obterEspecialidade(this.especialidadeId).subscribe(especialidade => {
        this.especialidadeForm.patchValue(especialidade);
      });
    }
  }

  onSubmit() {
    console.log("🚀 ~ FormEspecialidadeComponent ~ onSubmit ~ this.especialidadeForm.valid:", this.especialidadeForm.valid)
    if (this.especialidadeForm.valid) {
      const especialidadeData = this.especialidadeForm.value;
      
      if (this.isEditMode && this.especialidadeId) {
        this.especialidadeService.atualizarEspecialidade(this.especialidadeId, especialidadeData).subscribe({
          next: () => this.router.navigate(['/especialidades']),
          error: (error) => console.error('Erro ao atualizar especialidade:', error)
        });
      } else {
        this.especialidadeService.criarEspecialidade(especialidadeData).subscribe({
          next: () => this.router.navigate(['/especialidades']),
          error: (error) => console.error('Erro ao criar especialidade:', error)
        });
      }
    }
  }

  voltar() {
    this.router.navigate(['/especialidades']);
  }
}
