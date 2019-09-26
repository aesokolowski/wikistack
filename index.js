const express = require('express');
const morgan = require('morgan');
const Sequelize = require('sequelize');
const { db, Page, User } = require('./models');

const database = new Sequelize('postgres://127.0.0.1:5432/wikistack', {
  logging: false,
});
const app = express();
// const client = require('./db/article');

app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));


app.get('/', (req, res) => {
  db.authenticate()
    .then(() => {
      console.log('connected to the database');
    });
  res.send(`
             <!DOCTYPE html>
             <html>
               <head>
                 <title>Wikistack</title>
                 <link rel="stylesheet" href="stylesheets/style.css" />
               </head>
               <body>
                 <p>Hello World</p>
               </body>
             </html>
  `);
});

const PORT = 1337;
const init = async () => {
  await User.sync({ force: true });
  await Page.sync({ force: true });

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
};


// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}`);
// });

init();
