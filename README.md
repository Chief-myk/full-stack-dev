Create Frontend
Create Backend

Proxy

Add Proxy in vite.config.js :

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
})

and now sent req to /api

Note Only Works in Devlopment Time 

Cors :

app.use(cors(
  {
    origin: [
      'http://localhost:5173',
      'http://localhost:5174',
      'http://localhost:3000',
      // add production URL here
     ],
     credentials: true,
     methods: ['GET', 'POST', 'PUT', 'DELETE'],
     allowedHeaders: ['Content-Type', 'Authorization'], 
  }
));

Use cors policy in backend


Dockerize Backend

create Dockerfile , .dockerignore
Create Image using docker build -t express-server . 
Run Image  using  docker run -p 5000:5000 express-server


Dockerize Frontend
create Dockerfile , .dockerignore
Create Image using docker build -t react-client . 
Run Image  using  docker run -p 5173:3000 react-client

Docker Compose (To run multiple containers)


Github
Hostinger VPS