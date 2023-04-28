//Ici, vous importez le package HTTP natif de Node et l'utilisez 
//pour créer un serveur, en passant une fonction qui sera exécutée à 
//chaque appel effectué vers ce serveur. Cette fonction reçoit les 
//objets request et response en tant qu'arguments. Dans cet exemple, vous utilisez 
//la méthode end de la réponse pour renvoyer une réponse de type string à l'appelant.

//require la commande pour importer le package objet http qui permet de crée un serveur
const http = require('http');
//appeler la méthode "createServer" du package http
//entre () inserer les deux requete quelle recois donc la requete et la reponse
const server = http.createServer((req, res) => {
    res.end('Voilà la réponse du serveur !');
    
});

server.listen(process.env.PORT || 3000);
