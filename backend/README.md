# Let Me Rate - Backend API 🖥️

Este diretório contém o código-fonte da API do projeto **Let Me Rate**, desenvolvida em C# utilizando a plataforma .NET. A API é responsável pelas regras de negócio, autenticação de usuários, persistência de dados das aulas e avaliações dos alunos.

---

## 📌 Sumário

* [Tecnologias Utilizadas](#-tecnologias-utilizadas)
* [Estrutura do Banco de Dados & Modelos](#-estrutura-do-banco-de-dados--modelos)
* [Endpoints da API](#-endpoints-da-api)
* [Como Configurar e Executar](#-como-configurar-e-executar)
* [Autores](#-autores)
* [Licença](#-licença)

---

## 🛠️ Tecnologias Utilizadas

O backend foi construído com a seguinte stack de desenvolvimento:

- **[C# / .NET Core](https://dotnet.microsoft.com/en-us/)**: Plataforma de desenvolvimento principal.
- **[Entity Framework Core](https://learn.microsoft.com/en-us/ef/core/)**: ORM para mapeamento e manipulação do banco de dados de forma orientada a objetos.
- **[Pomelo EntityFrameworkCore MySql](https://github.com/PomeloFoundation/Pomelo.EntityFrameworkCore.MySql)**: Provedor de banco de dados do EF Core para MySQL.
- **[Swagger / OpenAPI](https://swagger.io/)**: Ferramenta para documentação interativa e testes das rotas da API em ambiente de desenvolvimento.

---

## 🗄️ Estrutura do Banco de Dados & Modelos

O banco de dados é relacional (MySQL) e o mapeamento é feito pelas seguintes entidades principais:

* **Pessoa**: Contém as informações pessoais comuns a Alunos e Colaboradores (Nome, Sobrenome, etc.).
* **User**: Credenciais de login (Username e Password).
* **Aluno**: Entidade do estudante que contém o `RA` (Registro Acadêmico) e se relaciona com `Pessoa`.
* **Colaborador**: Entidade do professor/colaborador, contendo a disciplina correspondente e se relaciona com `Pessoa`.
* **Disciplina**: Representa as matérias escolares/acadêmicas.
* **Aula**: Representa um encontro/aula específico com um determinado tema, pertencente a uma `Disciplina`.
* **Avaliacao**: O feedback postado pelo aluno contendo `Qualidade` (nota numérica/estrelas), `Mensagem` (comentário de texto) e data, associado a uma `Aula` e a um `Aluno`.

---

## 🌐 Endpoints da API

Abaixo estão listadas as rotas organizadas por seus respectivos controladores:

### 🔐 Auth (Autenticação)
- `POST /Auth/Authenticate`
  - **Função**: Autentica o usuário no sistema.
  - **Body**: Objeto contendo `Username` e `Password`.
  - **Retorno**: Objeto do usuário autenticado caso tenha sucesso.

### 👨‍🎓 Aluno (Estudantes)
- `GET /Aluno/GetStudent?idPessoa={id}`
  - **Função**: Obtém os dados do estudante (Nome, Sobrenome, RA) usando o ID da Pessoa associada.

### 👨‍🏫 Colaborador (Professores)
- `GET /Colaborador/GetDashboardColabData?idPessoa={id}`
  - **Função**: Obtém as informações do colaborador e de sua disciplina atribuída para exibir no painel/dashboard.

### 📚 Aula (Gerenciamento de Aulas)
- `GET /Aula/Listar?fkDisc={id}`
  - **Função**: Retorna a lista de todas as aulas registradas para uma determinada disciplina.
- `POST /Aula/NovaAula`
  - **Função**: Cadastra uma nova aula no sistema.
  - **Body**: Objeto da classe `Aula`.
- `PUT /Aula/EditarAula`
  - **Função**: Edita os dados de uma aula existente.
  - **Body**: Objeto da classe `Aula` contendo os dados atualizados.

### 📝 Avaliacao (Feedbacks)
- `GET /Avaliacao/Listar?fkDisc={id}`
  - **Função**: Retorna todas as avaliações realizadas para as aulas de uma determinada disciplina.
- `GET /Avaliacao/ListarPorAula?fkAula={id}`
  - **Função**: Retorna as avaliações específicas de uma determinada aula.
- `POST /Avaliacao/NovaAvaliacao`
  - **Função**: Envia um novo feedback/avaliação de aula.
  - **Body**: Objeto da classe `Avaliacao`.
- `DELETE /Avaliacao/Excluir?id={id}`
  - **Função**: Remove uma avaliação do sistema pelo ID.

---

## 🚀 Como Configurar e Executar

### Pré-requisitos
1. Instale o **SDK do .NET 6.0 ou superior**.
2. Certifique-se de que o **MySQL** está rodando em sua máquina e possui um banco criado (ex: `letmerate`).

### 1. Configurando a String de Conexão
Abra o arquivo `appsettings.json` ou `appsettings.Development.json` e configure o campo de conexão com suas credenciais do banco MySQL local:
```json
"ConnectionStrings": {
  "DefaultConnection": "Server=localhost;User=seu_usuario;Password=sua_senha;Database=letmerate"
}
```

### 2. Sincronizando o Banco de Dados (EF Scaffold)
Caso queira recriar os modelos a partir do banco de dados MySQL ou vice-versa, utilize o CLI do Entity Framework:
```bash
dotnet ef dbcontext scaffold "Server=localhost;User=seu_usuario;Password=sua_senha;Database=letmerate" "Pomelo.EntityFrameworkCore.MySql" -o Models -c BDContexto -f
```

### 3. Compilando e Executando
Compile o projeto para garantir que todas as dependências estão corretas:
```bash
dotnet build
```

Execute a API informando a URL e porta desejadas:
```bash
dotnet run --urls https://0.0.0.0:3001
```

O Swagger UI estará habilitado em ambiente de desenvolvimento no endereço:
```
https://localhost:3001/swagger
```

---

## 👤 Autor
| Matheus Bibiano                                       |
|-------------------------------------------------------|
| <img src="https://github.com/MatheusBibiano.png" width="150" height="150">|
| [<img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/matheus-bibiano-alves)|
<br/>

---

## 📄 Licença

Este projeto está licenciado sob a licença [MIT](https://choosealicense.com/licenses/mit/).
