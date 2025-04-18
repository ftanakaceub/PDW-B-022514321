import { UUID } from "crypto"
import { Profissional } from "./profissionais"

export interface Especialidade {
    id: UUID
    nome: string
    profissionais?: Profissional[]
}