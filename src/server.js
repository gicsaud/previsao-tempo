const express = require('express');
const env = require('dotenv').config();
const path = require('path');
const fetch = require('node-fetch'); 
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');


app.use(cors({
  origin: 'https://previsao-tempo-3c17kayce-giovanna-sauds-projects.vercel.app'
}));


app.use(express.json()); 
app.use(express.static('public'));

app.get('/api/weather', async (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).send('Nome da cidade é necessário');
  }

  const apiKey = process.env.API_KEY;
  const url = `https://api.hgbrasil.com/weather?format=json-cors&key=${apiKey}&city_name=${city}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.send(data);
  } catch (error) {
    res.status(500).send('Erro ao acessar a API de clima');
  }
});


app.listen(PORT, (error) => {
  if (error) {
    console.error('Falha ao iniciar o servidor:', error);
  } else {
    console.log(`Servidor rodando na porta ${PORT}`);
  }
});

