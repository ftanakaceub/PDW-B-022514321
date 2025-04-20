import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agendamento } from '../models/agendamentos';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AgendamentosService {
  private apiUrl = `${environment.apiUrl}/agendamentos`;

  constructor(private http: HttpClient) {}

  listarAgendamentos(): Observable<Agendamento[]> {
    return this.http.get<Agendamento[]>(this.apiUrl);
  }

  obterAgendamento(id: string): Observable<Agendamento> {
    return this.http.get<Agendamento>(`${this.apiUrl}/${id}`);
  }

  criarAgendamento(agendamento: Agendamento): Observable<Agendamento> {
    return this.http.post<Agendamento>(this.apiUrl, agendamento);
  }

  atualizarAgendamento(
    id: string,
    agendamento: Agendamento
  ): Observable<Agendamento> {
    return this.http.put<Agendamento>(`${this.apiUrl}/${id}`, agendamento);
  }

  deletarAgendamento(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
