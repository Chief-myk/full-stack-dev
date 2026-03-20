import cors from 'cors';
import express from 'express';

const app = express();
const PORT = 5000;

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

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.listen(PORT, "0.0.0.0" , () => { // Docker Bind to all interfaces
  console.log(`Server is running on http://localhost:${PORT}`);
});