// src/index.js
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hono JS Berhasil! 🎉')
})

app.get('/hai', (c) => {
 return c.json({ message: 'Hai dari Hono!' })
})

app.get('/api/test', (c) => {
  return c.json({ message: 'API hidup!' })
})

export default app