# Let Me Rate 🎓✨

<p align="center">
  <img src="https://img.shields.io/badge/Status-Conclu%C3%ADdo-success?style=for-the-badge&logo=github" alt="Status: Concluído" />
  <img src="https://img.shields.io/badge/Backend-.NET%20%2F%20C%23-blue?style=for-the-badge&logo=dotnet" alt="Backend: .NET / C#" />
  <img src="https://img.shields.io/badge/Frontend-ReactJS-blue?style=for-the-badge&logo=react" alt="Frontend: ReactJS" />
  <img src="https://img.shields.io/badge/Database-MySQL-blue?style=for-the-badge&logo=mysql" alt="Database: MySQL" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License: MIT" />
</p>

---

## 📌 Sobre o Projeto

O **Let Me Rate** é um sistema web desenvolvido como Trabalho de Conclusão de Curso (TCC). A plataforma foi projetada para otimizar o processo de feedback pedagógico, permitindo que estudantes avaliem aulas de forma rápida e anônima, e que os professores (colaboradores) tenham acesso a relatórios e dashboards detalhados sobre a qualidade de suas aulas e disciplinas.

Com isso, o **Let Me Rate** busca aproximar alunos e docentes, fornecendo insights valiosos para o aprimoramento constante da didática e da estrutura das aulas.

---

## ⚙️ Arquitetura do Sistema

O projeto é dividido em duas partes principais:

1. **Backend (`/backend`)**:
   - Desenvolvido em **C#** com **.NET Web API**.
   - Persistência de dados utilizando **Entity Framework Core** com provedor **MySQL (Pomelo)**.
   - Documentação de rotas interativa com **Swagger / OpenAPI**.
   - Arquitetura baseada em Models e Controllers.

2. **Frontend (`/frontend`)**:
   - Desenvolvido em **ReactJS** com **Vite** para um build rápido e otimizado.
   - Estilização moderna e responsiva utilizando **Tailwind CSS**.
   - Gerenciamento de requisições e cache utilizando a biblioteca **SWR**.
   - Navegação SPA com **React Router DOM**.

---

## 🚀 Funcionalidades Principais

### Para Alunos (Discentes) 👨‍🎓
- **Visualização de Aulas**: Acesso à listagem de aulas disponíveis para a sua respectiva disciplina.
- **Formulário de Avaliação**: Avaliar aulas ministradas atribuindo uma nota de qualidade (rating) e enviando um comentário (feedback escrito).
- **Interface Intuitiva**: Processo ágil focado em usabilidade móvel e desktop.

### Para Colaboradores (Professores/Administração) 👨‍🏫
- **Gerenciamento de Aulas**: Criar, visualizar, editar e excluir aulas de suas disciplinas associadas.
- **Visualização de Feedbacks**: Acesso às avaliações e comentários enviados pelos alunos sobre cada aula.
- **Dashboard de Desempenho**: Painel para acompanhar métricas de qualidade das aulas e evolução do aprendizado.

---

## 📂 Estrutura do Repositório

```bash
tcc-projeto-final/
├── backend/          # API desenvolvida em .NET / C#
└── frontend/         # Interface SPA desenvolvida em ReactJS
```

Para mais detalhes sobre cada parte do sistema, consulte os respectivos arquivos de documentação:
- [Documentação do Backend (API)](file:///home/matheus/Downloads/tcc-projeto-final/backend/README.md)
- [Documentação do Frontend (Interface)](file:///home/matheus/Downloads/tcc-projeto-final/frontend/README.md)

---

## 🔧 Pré-requisitos para Rodar Localmente

Antes de iniciar, certifique-se de ter instalado em sua máquina:
- [SDK do .NET Core](https://dotnet.microsoft.com/download) (versão 6.0 ou superior recomendada)
- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- Banco de dados [MySQL](https://www.mysql.com/) ou compatível (ex: MariaDB)

---

## 🛠️ Como Executar o Projeto

### 1. Configurando o Banco de Dados e Backend
Navegue até o diretório `backend`:
```bash
cd backend
```
Certifique-se de configurar a string de conexão no arquivo `appsettings.json` ou `appsettings.Development.json` apontando para o seu banco de dados MySQL local.

Execute o comando para gerar as tabelas no banco de dados através das migrations/scaffolding do Entity Framework:
```bash
dotnet ef dbcontext scaffold "Server=localhost;User=guest;Password=123;Database=letmerate" "Pomelo.EntityFrameworkCore.MySql" -o Models -c BDContexto -f
```
Compile o projeto:
```bash
dotnet build
```
Inicie a API:
```bash
dotnet run --urls https://0.0.0.0:3001
```
A documentação da API estará disponível através do Swagger em `https://localhost:3001/swagger`.

### 2. Configurando o Frontend
Abra um novo terminal e navegue até o diretório `frontend`:
```bash
cd frontend
```
Instale as dependências:
```bash
npm install
```
Inicie a aplicação React em ambiente de desenvolvimento:
```bash
npm run dev
```
O frontend estará acessível no endereço indicado no terminal (normalmente `http://localhost:5173`).

---

## 👤 Autor
| Matheus Bibiano                                       |
|-------------------------------------------------------|
| <img src="https://github.com/MatheusBibiano.png" width="150" height="150">|
| [<img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/matheus-bibiano-alves)|
<br/>

---

## 📄 Licença

Este projeto está sob a licença [MIT](https://choosealicense.com/licenses/mit/).