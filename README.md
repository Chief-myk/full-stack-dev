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
docker compose up 

Push To Github


Hostinger VPS
Buy An Hostinger VPS KVM
Open its terminal
sudo apt update -y
sudo apt install git -y

Install docker on machine https://docs.docker.com/engine/install/ubuntu/

git clone https://github.com/Chief-myk/full-stack-dev.git
sudo chmod +x docker-compose.yml
docker compose up --build

now visit both frontend and backend on broswer using machineIP:PORT

Note you will see an error in frontend to error fetching message 
to resolve it when you make api request in frontent replpace to this https:/ipaddress/port/api url and in backend under cors policy add machineIP

now again redeploy code in github and again git clone project in machine


ADD CICD Github Action To Directly Deploy On My KVM MaChine
create deploy.yaml under .github/workflows
setup ssh key : ssh-keygen -t rsa -b 4096 -C "hostinger@mayankmittal.dev"

add the public key into machine 
cd .ssh/
vim authorized_keys

add the public ssh key into github action secret


Now Add Domain
Add Load Balancer (Nginx), API Gateway, SSL / HTTPS, Firewall, Rate Limiting 

Advance 🔥
Add Caching Layer, Kubernetes, Monitoring & Logging(Prometheus, Grafana)

If deployed on AWS ECR and ECS then i just need to add API Gateway (Optional) (Amazon API Gateway), Caching Layer (Amazon ElastiCache), Rate Limiting, CDN (Amazon CloudFront)