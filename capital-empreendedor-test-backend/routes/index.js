var express = require('express');
const cors = require('cors');
var router = express.Router();
const functions = require('../database/functions');

const collection = {
  USERS: 'users',
  OPPORTUNITIES: 'opportunities'
};

const emails = {
  CLIENT1: 'cliente1@example.com',
  CLIENT2: 'cliente2@example.com',
  CLIENT3: 'cliente3@example.com',
  CLIENT4: 'cliente4@example.com',
  CLIENT5: 'cliente5@example.com'
};

// router.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200/");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

router.get('/', function(req, res, next) {
  res.send({ message: "OK" });
});

router.get('/getAll', cors(), async(req, res) => {
  const check = req.query;
  if (Object.keys(check).length !== 0) {
    const result = await functions.getAll(collection.OPPORTUNITIES);
    res.json(result);
  }
  else {
    const result = await functions.getAll(collection.USERS);
    res.json(result);
  }
});

router.get('/getOne' , cors(), async(req, res) => {
  const check = req.query;
  if (Object.keys(req.query).length === 1){     // Verifica se há apenas 1 params, utilizado para separar o request de clientes: 1 e opportunities: 2
    for (let email in emails) {                 // Percorre a lista de emails (o correto seria buscar essa lista direto do db)
      if (emails[email] === req.query.email) {  // Verifica qual cliente deve ser buscado do db
        const result = await functions.getOne(collection.USERS, emails[email]);
        return res.json(result);
      }
    }
  }
  else {
    for (let email in emails) {
      if (emails[email] === req.query.client) {
        const result = await functions.getOne(collection.OPPORTUNITIES, emails[email]);
        return res.json(Object.values(result)[0]);
      }
    }
  }
  return res.status(500).send('Email not found');
  
});

router.put('/update', cors(), async(req, res) => {
  console.log(req.body);
  //const result = await functions.update(collection.OPPORTUNITIES, emails.CLIENT1, req.body);
  //res.json(result);
});

router.post('/set', cors(), async(req, res) => {
  const result = await functions.set(collection.USERS, emails.CLIENT1, req.body);
  res.json(result);
});

router.delete('/delete', cors(), async(req, res) => {
  await functions.delete(collection.USERS, emails.CLIENT1);
  res.status(204).send('User Deleted');
});

module.exports = router;
