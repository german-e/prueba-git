const express = include('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola Mundo');
})


app.listen(300, ()=> console.log("Servidor escuchando en puerto 3000"));
