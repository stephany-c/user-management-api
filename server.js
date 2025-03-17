import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors';

const prisma = new PrismaClient()

const app = express ()
app.use(express.json())
app.use(cors())

app.post('/usuarios', async (req , res)=>{
    await prisma.user.create({
        data: {
          email: req.body.email,
          name: req.body.name,
          age: req.body.age
        }
      });
 res.status(201).json(req.body)
})

app.get('/usuarios', async (req , res)=>{

  const users = await prisma.user.findMany()

    res.status(200).json(users)
})

app.listen(3000)


/*
-Criar um usuário
-Listar todos os usuários
-Editar um usuários
-deletar um usuários
*/
/* 1) Tipo de rota / Métodos HTTP
   2) Endereço

Nome de usuário: tethcarol
Senha: gXEyUoAUClJq06yG
*/

 