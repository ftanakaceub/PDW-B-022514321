import { Agendamento } from "./agendamentos"

export interface Usuario {
    id: UUID
    nome: string
    cpf: string,
    agendamentos?: Agendamento[]
}