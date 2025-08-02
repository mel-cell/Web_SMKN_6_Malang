import { serve } from '@hono/node-server'
import app from './src/index.js'  

const port = 3002

serve({
  fetch: app.fetch,
  port
})

console.log(`🔧 Server berjalan di http://localhost:${port}`)