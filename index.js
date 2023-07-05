const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const voitureRoute = require('./routes/voitureRoute');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => console.log('[DATABASE] Connected to MongoDB'))
    .catch((err) => console.error(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/voiture', voitureRoute);

app.listen(port, () => console.log(`[SERVER] Le serveur écoute sur le port : ${port}`));
