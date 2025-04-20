import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-usuarios',
  standalone: false,
  templateUrl: './form-usuarios.component.html',
  styleUrl: './form-usuarios.component.css'
})
export class FormUsuariosComponent {
  usuarioForm: FormGroup;
  isEditMode = false;
  usuarioId: string | null = null;

  constructor(
    private usuariosService: UsuariosService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.usuarioForm = this.fb.group({
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isEditMode = true;
        this.usuarioId = params['id'];
        this.carregarUsuario();
      }
    });
  }

  carregarUsuario() {
    if (this.usuarioId) {
      this.usuariosService.obterUsuario(this.usuarioId).subscribe((usuario) => {
        this.usuarioForm.patchValue(usuario);
      });
    }
  }

  salvar() {
    if (this.usuarioForm.valid) {
      const usuarioData = this.usuarioForm.value;

      if (this.isEditMode && this.usuarioId) {
        this.usuariosService.atualizarUsuario(this.usuarioId, usuarioData).subscribe({
          next: () => {
            this.router.navigate(['/usuarios']);
          },
          error: (error) => {
            console.error('Erro ao atualizar usuário:', error);
          }
        });
      } else {
        this.usuariosService.criarUsuario(usuarioData).subscribe({
          next: () => {
            this.router.navigate(['/usuarios']);
          },
          error: (error) => {
            console.error('Erro ao criar usuário:', error);
          } 
        });
      }
    }
  }

  cancelar() {
    this.router.navigate(['/usuarios']);
  }
}
