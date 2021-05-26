const express = require('express');
const routes = require('./routes/index');

const app = express();

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
    res.send('OI');
});

app.listen(process.env.PORT || 3334, () => console.log('Rodando'));