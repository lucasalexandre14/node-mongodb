const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: String,
})

const Comanda = mongoose.model('Comanda', schema)

module.exports = Comanda