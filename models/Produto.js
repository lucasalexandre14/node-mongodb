const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: String,
    peso: Number,
    tamanho: String,
    tipo: String,
    ingredientes: []
})

const Produto = mongoose.model('Produto', schema)

module.exports = Produto