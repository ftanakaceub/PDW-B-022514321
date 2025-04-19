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

INSERT INTO usuarios (nome, cpf) VALUES ('João Silva', '12345678901');
INSERT INTO usuarios (nome, cpf) VALUES ('Pedro Cardoso', '12345678902');
INSERT INTO usuarios (nome, cpf) VALUES ('Maria Oliveira', '12345678903');
INSERT INTO usuarios (nome, cpf) VALUES ('Julia Costa', '12345678904');
INSERT INTO usuarios (nome, cpf) VALUES ('Carlos Santos', '12345678905');
INSERT INTO usuarios (nome, cpf) VALUES ('Mariana Lima', '12345678906');


-- Tabela de Agendamentos
CREATE TABLE agendamentos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    usuario_id UUID NOT NULL,
    profissional_id UUID NOT NULL,
    data_hora TIMESTAMPTZ NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (profissional_id) REFERENCES profissionais(id) ON DELETE CASCADE,
    UNIQUE (profissional_id, data_hora) -- evita agendamentos duplicados no mesmo horário
);

INSERT INTO agendamentos (usuario_id, profissional_id, data_hora)
SELECT u.id, p.id, now() + (floor(random() * 4) || ' days')::interval
FROM usuarios u, profissionais p
WHERE u.nome = 'João Silva' AND p.nome  = 'Dr. João Silva';
INSERT INTO agendamentos (usuario_id, profissional_id, data_hora)
SELECT u.id, p.id, now() + (floor(random() * 4) || ' days')::interval
FROM usuarios u, profissionais p
WHERE u.nome = 'João Silva' AND p.nome  = 'Dr. Maria Oliveira';
INSERT INTO agendamentos (usuario_id, profissional_id, data_hora)
SELECT u.id, p.id, now() + (floor(random() * 4) || ' days')::interval
FROM usuarios u, profissionais p
WHERE u.nome = 'João Silva' AND p.nome  = 'Dr. Carlos Santos';
INSERT INTO agendamentos (usuario_id, profissional_id, data_hora)
SELECT u.id, p.id, now() + (floor(random() * 4) || ' days')::interval
FROM usuarios u, profissionais p
WHERE u.nome = 'João Silva' AND p.nome  = 'Dra. Ana Pereira';
INSERT INTO agendamentos (usuario_id, profissional_id, data_hora)
SELECT u.id, p.id, now() + (floor(random() * 4) || ' days')::interval
FROM usuarios u, profissionais p
WHERE u.nome = 'Pedro Cardoso' AND p.nome = 'Dr. Pedro Cardoso';
INSERT INTO agendamentos (usuario_id, profissional_id, data_hora)
SELECT u.id, p.id, now() + (floor(random() * 4) || ' days')::interval
FROM usuarios u, profissionais p
WHERE u.nome = 'Pedro Cardoso' AND p.nome = 'Dra. Julia Costa';
INSERT INTO agendamentos (usuario_id, profissional_id, data_hora)
SELECT u.id, p.id, now() + (floor(random() * 4) || ' days')::interval
FROM usuarios u, profissionais p
WHERE u.nome = 'Maria Oliveira' AND p.nome = 'Dr. Carlos Santos';
INSERT INTO agendamentos (usuario_id, profissional_id, data_hora)
SELECT u.id, p.id, now() + (floor(random() * 4) || ' days')::interval
FROM usuarios u, profissionais p
WHERE u.nome = 'Maria Oliveira' AND p.nome = 'Dra. Ana Pereira';
INSERT INTO agendamentos (usuario_id, profissional_id, data_hora)
SELECT u.id, p.id, now() + (floor(random() * 4) || ' days')::interval
FROM usuarios u, profissionais p
WHERE u.nome = 'Maria Oliveira' AND p.nome = 'Dr. Marcos Oliveira';
INSERT INTO agendamentos (usuario_id, profissional_id, data_hora)
SELECT u.id, p.id, now() + (floor(random() * 4) || ' days')::interval
FROM usuarios u, profissionais p
WHERE u.nome = 'Julia Costa' AND p.nome = 'Dra. Mariana Lima';
INSERT INTO agendamentos (usuario_id, profissional_id, data_hora)
SELECT u.id, p.id, now() + (floor(random() * 4) || ' days')::interval
FROM usuarios u, profissionais p
WHERE u.nome = 'Carlos Santos' AND p.nome = 'Dr. Pedro Cardoso';
INSERT INTO agendamentos (usuario_id, profissional_id, data_hora)
SELECT u.id, p.id, now() + (floor(random() * 4) || ' days')::interval
FROM usuarios u, profissionais p
WHERE u.nome = 'Carlos Santos' AND p.nome = 'Dr. Maria Oliveira';
INSERT INTO agendamentos (usuario_id, profissional_id, data_hora)
SELECT u.id, p.id, now() + (floor(random() * 4) || ' days')::interval
FROM usuarios u, profissionais p
WHERE u.nome = 'Mariana Lima' AND p.nome = 'Dra. Julia Costa';
INSERT INTO agendamentos (usuario_id, profissional_id, data_hora)
SELECT u.id, p.id, now() + (floor(random() * 4) || ' days')::interval
FROM usuarios u, profissionais p
WHERE u.nome = 'Mariana Lima' AND p.nome = 'Dr. Marcos Oliveira';
INSERT INTO agendamentos (usuario_id, profissional_id, data_hora)
SELECT u.id, p.id, now() + (floor(random() * 4) || ' days')::interval
FROM usuarios u, profissionais p
WHERE u.nome = 'Mariana Lima' AND p.nome = 'Dra. Ana Pereira';


