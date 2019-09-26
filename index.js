const express = require('express');
const morgan = require('morgan');
const sequelize = require('sequelize');
const database = new sequelize('postgress://127.0.0.1:5432/wikistack');
const app = express();
const client = require('./db');

app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.send(`
             <!DOCTYPE html>
             <html>
               <head>
                 <title>Wikistack</title>
               </head>
               <body>
                 <p>Hello World</p>
               </body>
             </html>
  `);
});

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
