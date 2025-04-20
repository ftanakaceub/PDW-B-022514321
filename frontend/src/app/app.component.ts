import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';

  constructor(private router: Router) {}

  items = [
    {
      label: 'Home',
      command: () => {
        this.router.navigate(['/']);
      },
    },          {
      separator: true
  },
    {
      label: 'Agendamentos',
      command: () => {
        this.router.navigate(['/agendamentos']);
      },
    },          {
      separator: true
  },
    {
      label: 'Especialidades',
      command: () => {
        this.router.navigate(['/especialidades']);
      },
    },          {
      separator: true
  },
    {
      label: 'Profissionais',
      command: () => {
        this.router.navigate(['/profissionais']);
      },
    },          {
      separator: true
  },
    {
      label: 'Usuários',
      command: () => {
        this.router.navigate(['/usuarios']);
      },
    },
  ];
}
