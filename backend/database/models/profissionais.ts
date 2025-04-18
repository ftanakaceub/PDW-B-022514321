import { Especialidade } from "./especialidades"
import { Agendamento } from "./agendamentos"
import { UUID } from "crypto"

export interface Profissional {
    id: UUID
    nome: string
    especialidade?: Especialidade,
    agendamentos?: Agendamento[]
}