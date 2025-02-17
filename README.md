API de Gerenciamento de Usuários

Descrição

Esta API foi desenvolvida utilizando Node.js, Express e Prisma ORM para gerenciar usuários. Permite a criação, listagem, atualização e remoção de usuários de um banco de dados.

Tecnologias Utilizadas

Node.js

Express.js

Prisma ORM

SQLite/PostgreSQL/MySQL (dependendo da configuração do Prisma)

Instalação

1. Clone o repositório

git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio

2. Instale as dependências

npm install

3. Configure o Prisma

Edite o arquivo .env para definir a URL do banco de dados. Exemplo:

DATABASE_URL="file:./dev.db" # Para SQLite

Após configurar, execute:

npx prisma migrate dev --name init

4. Inicie o servidor

node server.js

A API estará disponível em http://localhost:3000.

Endpoints

Criar um usuário

POST /usuarios

{
  "name": "João Silva",
  "email": "joao@email.com",
  "age": 30
}

Listar usuários

GET /usuarios

Retorna todos os usuários cadastrados.

Pode filtrar por nome com ?name=João.

Atualizar um usuário

PUT /usuarios/:id

{
  "name": "Maria Souza",
  "email": "maria@email.com",
  "age": 25
}

Deletar um usuário

DELETE /usuarios/:id

Remove o usuário com o ID informado.

Considerações

Certifique-se de que o banco de dados esteja configurado corretamente antes de rodar a API.

O Prisma deve estar conectado a um banco de dados válido.


