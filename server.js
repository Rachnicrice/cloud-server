'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.status(200).send('Welcome HoooOOOoooOOOOOooOme - Homepage');
})

app.listen(PORT, () => {
  console.log(`server up: ${PORT}`);
});