// server.js

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000; // Você pode escolher outra porta se necessário

// Middleware para parsear JSON
app.use(bodyParser.json());

// Endpoint para buscar os dados dos motoboys
app.get('/motoboys', (req, res) => {
  fs.readFile(path.join(__dirname, 'src/data/cadastromotoboy.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Erro ao ler o arquivo JSON');
    }
    res.send(JSON.parse(data));
  });
});

// Endpoint para salvar os dados dos motoboys
app.post('/saveMotoboy', (req, res) => {
  const newMotoboy = req.body;

  // Lê o arquivo JSON existente
  fs.readFile(path.join(__dirname, 'src/data/cadastromotoboy.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Erro ao ler o arquivo JSON');
    }

    const motoboys = JSON.parse(data);
    
    // Adiciona um novo motoboy ao array com um ID único
    motoboys.push({ id: motoboys.length + 1, ...newMotoboy });

    // Escreve os dados atualizados de volta no arquivo JSON
    fs.writeFile(path.join(__dirname, 'src/data/cadastromotoboy.json'), JSON.stringify(motoboys, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Erro ao salvar os dados do motoboy');
      }
      res.status(201).send('Motoboy cadastrado com sucesso');
    });
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
