const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT|| 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('¡Hola desde el backend!');
});

app.listen(PORT, () => {
    console.log(`Servidor Express en ejecución en el puerto ${PORT}`)
});