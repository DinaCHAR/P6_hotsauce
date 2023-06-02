const mongoose = require('mongoose');

mongoose
  .connect(
    mongoose.connect('mongodb+srv://P6:13051996LOd@cluster0.x5pr0sr.mongodb.net/test?retryWrites=true&w=majority'),
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => console.log('Connexion à MongoDB réussie!'))
  .catch(() => console.log('Connexion à MongoDB a échouée!'));