const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const router = require('express-router');



const Thing = require('./models/Sauce');

mongoose.connect('mongodb+srv://P6:13051996LOd@cluster0.x5pr0sr.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


const dbConnection = require('./config/db');
const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');


//mettre cros voir si c'est pas ici 

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'//PEUT ETRE IL MANQUE ICI AU AUTHORISATION
  );
  next();
});

app.use('/images/', express.static(path.join(__dirname, 'images')));//IMAGES NEST PAS RECONNU
app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes);

module.exports = app;