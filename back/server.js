const express = require('express'); //importa código pronto que ajuda a criar um servidor usando menos código
const path = require('path'); //importa código pronto do Node.JS para manipular caminhos de arquivos
 
const app = express(); //instancia o código pronto que ajuda a criar o servidor
const port = 3000; //esta será a porta do site. Quando não tem nada, a porta é a 80 (http) ou 8080 (https)
 
// contadores
let contadorSite = 0;
let contadorImagem = 0;
 
// aqui estamos dizendo para o código pronto que vamos usar apenas a pasta 'public' no servidor
app.use(express.static(path.join(__dirname, 'public')));
 
// 'get' é o nome da ação de acessar um site ou imagem ou video ou etc.
// '/' é o local, e indica na raiz/começo.
app.get('/', (req, res) => {
  console.log(req.socket.remoteAddress);
  //console.log(res);
  contadorSite++; //jeito de escrever que aumenta o contador em +1
  console.log("site acessado " + contadorSite + "vezes."); //fazer aparecer no terminal o que está entre os parenteses
  res.sendFile(path.join(__dirname, 'public', 'project.html')); //envia o arquivo index.js quando abre o site
});
 
app.get('/imagem', (req, res) => {
  contadorImagem = contadorImagem + 1;
  console.log("imagem acessada " + contadorImagem + "vezes.");
  res.sendFile(path.join(__dirname, 'public', 'img.png'));
});
 
//liga o servidor
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
 