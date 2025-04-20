import { Component } from '@angular/core';
import { Usuario } from '../models/usuarios';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-usuarios',
  standalone: false,
  templateUrl: './listar-usuarios.component.html',
  styleUrl: './listar-usuarios.component.css',
})
export class ListarUsuariosComponent {
  usuarios: Usuario[] = [];

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) {
    this.usuariosService.listarUsuarios().subscribe((usuarios) => {
      this.usuarios = usuarios;
    });
  }

  adicionarUsuario() {
    this.router.navigate(['/usuarios/form']);
  }

  editarUsuario(id: string) {
    this.router.navigate(['/usuarios/form', id]);
  }

  excluirUsuario(id: string) {
    this.usuariosService.deletarUsuario(id).subscribe(() => {
      this.usuarios = this.usuarios.filter((usuario) => usuario.id !== id);
    });
  }
}
