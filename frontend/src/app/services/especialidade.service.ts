import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Especialidade } from '../models/especialidades';


@Injectable({
  providedIn: 'root'
})
export class EspecialidadeService {
  private apiUrl = `${environment.apiUrl}/especialidades`;

  constructor(private http: HttpClient) { }

  listarEspecialidades(): Observable<Especialidade[]> {
    return this.http.get<Especialidade[]>(this.apiUrl);
  }

  obterEspecialidade(id: string): Observable<Especialidade> {
    return this.http.get<Especialidade>(`${this.apiUrl}/${id}`);
  }

  criarEspecialidade(especialidade: Especialidade): Observable<Especialidade> {
    return this.http.post<Especialidade>(this.apiUrl, especialidade);
  }

  atualizarEspecialidade(id: string, especialidade: Especialidade): Observable<Especialidade> {
    return this.http.put<Especialidade>(`${this.apiUrl}/${id}`, especialidade);
  }

  deletarEspecialidade(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
} 