import { UUID } from "crypto"
import { Profissional } from "./profissionais"
import { Usuario } from "./usuarios"

export interface Agendamento {
    id: UUID
    usuarioId: UUID
    profissionalId: UUID
    dataHora: Date
    usuario?: Usuario
    profissional?: Profissional 
}
