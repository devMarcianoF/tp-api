const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voitureSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    model: String,
    brand: String,
    transmission: String,
});

module.exports = mongoose.model('Voiture', voitureSchema);
