const express = require('express');
const mongoose = require('mongoose');
const app = express();
const uri = 'mongodb+srv://juancastro82211:beeKHg83pCzo3VBf@websem.honqufu.mongodb.net/WebSem';
const path = require('path');
const router =require('./routes/router.js');
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

app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'FrontEnd')));

app.use('/', router);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'FrontEnd', 'home.html'));
});