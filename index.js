require('dotenv').config();
const express = require('express');
const { webhook } = require('./utils/webhook');

const PORT = process.env.NODE_PORT || 3000;
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => res.sendStatus(200));

app.post('/webhook', webhook);

app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`));
