-- Tabela de Especialidades Médicas
CREATE TABLE especialidades (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO especialidades (nome) VALUES ('Cardiologia');
INSERT INTO especialidades (nome) VALUES ('Dermatologia');
INSERT INTO especialidades (nome) VALUES ('Pediatria');
INSERT INTO especialidades (nome) VALUES ('Psiquiatria');

-- Tabela de Profissionais da Saúde
CREATE TABLE profissionais (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome VARCHAR(100) NOT NULL,
    especialidade_id UUID NOT NULL,
    FOREIGN KEY (especialidade_id) REFERENCES especialidades(id) ON DELETE CASCADE
);

INSERT INTO profissionais (nome, especialidade_id) SELECT 'Dr. João Silva', id FROM especialidades WHERE nome = 'Cardiologia';
INSERT INTO profissionais (nome, especialidade_id) SELECT 'Dr. Pedro Cardoso', id FROM especialidades WHERE nome = 'Cardiologia';
INSERT INTO profissionais (nome, especialidade_id) SELECT 'Dr. Maria Oliveira', id FROM especialidades WHERE nome = 'Dermatologia';
INSERT INTO profissionais (nome, especialidade_id) SELECT 'Dra. Julia Costa', id FROM especialidades WHERE nome = 'Dermatologia';
INSERT INTO profissionais (nome, especialidade_id) SELECT 'Dr. Carlos Santos', id FROM especialidades WHERE nome = 'Pediatria';
INSERT INTO profissionais (nome, especialidade_id) SELECT 'Dra. Mariana Lima', id FROM especialidades WHERE nome = 'Pediatria';
INSERT INTO profissionais (nome, especialidade_id) SELECT 'Dra. Ana Pereira', id FROM especialidades WHERE nome = 'Psiquiatria';
INSERT INTO profissionais (nome, especialidade_id) SELECT 'Dr. Marcos Oliveira', id FROM especialidades WHERE nome = 'Psiquiatria';

-- Tabela de Usuários (Pacientes)
CREATE TABLE usuarios (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(11) NOT NULL UNIQUE
);

-- Tabela de Agendamentos
CREATE TABLE agendamentos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    usuario_id UUID NOT NULL,
    profissional_id UUID NOT NULL,
    data_hora TIMESTAMP NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (profissional_id) REFERENCES profissionais(id) ON DELETE CASCADE,
    UNIQUE (profissional_id, data_hora) -- evita agendamentos duplicados no mesmo horário
);