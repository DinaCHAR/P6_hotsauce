/**
 *  multer est un package de gestion de fichiers.
 *  Sa méthode diskStorage()  configure le chemin et le nom de fichier pour les fichiers entrants.
 *  Sa méthode single()  crée un middleware qui capture les fichiers d'un certain type (passé en argument), et les enregistre au système de fichiers du serveur à l'aide du storage configuré.
 */

/* importer MULTRER*/
const multer = require('multer');
const path = require('path');
/* dictionnaire du mine_type*/
const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

/*Objet de configuration multer diskStorage= on l'enregistre dedans*/
const storage = multer.diskStorage({

  destination: (req, file, callback) => {
    /*appeler le callback mettre un argument 'null', afin d'indiquer qu'il n'y as pas d'erreur a ce niveau la*/
    callback(null, 'images');
  },
  /*requête qui prend la req le fichier et le callback*/
  filename: (req, file, callback) => {
    /*Cree le nom du fichier*/
    /*split pour supp les espace et remplacer par ''*/
    const name = file.originalname.split(' ').join('_');
    /*appliquer une extension au fichier pour générer l'extension du fichier*/
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
});

module.exports = multer({ storage: storage }).single('image');