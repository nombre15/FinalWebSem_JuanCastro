const express = require('express');
const mongoose = require('mongoose');
const app = express();
const uri = 'mongodb+srv://juancastro82211:beeKHg83pCzo3VBf@websem.honqufu.mongodb.net/';
const path = require('path');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

function connect() {
  return mongoose.connect(uri)
  .then((conn) => {
    console.log('Connected to the database');
    return conn;  
  })
  .catch((error) => {
    console.error('Connection error', error);
    throw error;  
  });
}

connect();

// Middleware to parse JSON
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('API is working');
});

const proyectPath = path.resolve(__dirname, '../frontend');
app.use(express.static(path.resolve(proyectPath)));

const router =require('./routes/router.js');
app.use('/', router);