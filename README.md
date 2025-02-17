API de Usuários com Express e Prisma

Este projeto é uma API REST para gerenciamento de usuários, utilizando Node.js, Express e Prisma ORM conectado a um banco de dados MongoDB.

Tecnologias Utilizadas:

Node.js

Express

Prisma ORM

MongoDB

Configuração do Ambiente:

Antes de iniciar o projeto, certifique-se de ter instalado:

Node.js

MongoDB Atlas (ou uma instância local do MongoDB)

Prisma ORM

Instalação e Configuração:

Clone o repositório:

git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

Instale as dependências:

npm install

Configurar a conexão com o MongoDB:
No arquivo .env, substitua a string de conexão pelo seu banco de dados MongoDB:

DATABASE_URL="mongodb+srv://seu-usuario:suasenha@seucluster.mongodb.net/Users?retryWrites=true&w=majority&appName=Users"

Gere o cliente Prisma:

npx prisma generate

Inicie o servidor:

npm start

Endpoints da API

Criar um Usuário

POST /usuarios

Body (JSON):

{
  "name": "João Silva",
  "email": "joao@email.com",
  "age": 30
}

Listar Usuários

GET /usuarios

Resposta:

[
  {
    "id": "63f7c1a6a1b2c3d4e5f6a7b8",
    "name": "João Silva",
    "email": "joao@email.com",
    "age": 30
  }
]

Atualizar Usuário

PUT /usuarios/:id

Body (JSON):

{
  "name": "João Pedro Silva",
  "email": "joaopedro@email.com",
  "age": 31
}

Deletar Usuário

DELETE /usuarios/:id

Resposta:

{
  "message": "Usuário deletado com sucesso!"
}

