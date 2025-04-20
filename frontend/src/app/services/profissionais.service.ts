import { Injectable } from '@angular/core';
import { Profissional } from '../models/profissional';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfissionaisService {

  private apiUrl = `${environment.apiUrl}/profissionais`;

  constructor(private http: HttpClient) { }

  listarProfissionais(): Observable<Profissional[]> {
    return this.http.get<Profissional[]>(this.apiUrl);
  }

  obterProfissional(id: string): Observable<Profissional> {
    return this.http.get<Profissional>(`${this.apiUrl}/${id}`);
  }

  criarProfissional(profissional: Profissional): Observable<Profissional> {
    return this.http.post<Profissional>(this.apiUrl, profissional);
  }

  atualizarProfissional(id: string, profissional: Profissional): Observable<Profissional> {
    return this.http.put<Profissional>(`${this.apiUrl}/${id}`, profissional);
  }

  deletarProfissional(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
