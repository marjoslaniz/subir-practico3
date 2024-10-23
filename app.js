import express from 'express';

//crear uns instancia de Express
const app = express();

//configurar puerto escucha en el servidor
const PORT = 3000;

//ruta basica
app.get('/', (req, res) => {
    res.end('Hola Mundo');
});

//Iniciar server

app.listen(PORT, () => {
    console.log(`Servidor inicia en http://localhost:${PORT}`);
    
});