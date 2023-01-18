import { PrismaClient } from '@prisma/client'
import Fastify from 'fastify'
import cors from '@fastify/cors'

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

app.get('/hello', async () => {
  const habits = await prisma.habit.findMany()
  
  return habits
})

/* método HTTP: Get, Post, Put, Patch, Delete. */

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server running!')
})
