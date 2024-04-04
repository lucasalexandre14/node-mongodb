const mongoose = require('mongoose')
const { type } = require('os')

const schema = mongoose.Schema({
    nome: {type: String,
        required: true,
        uppercase: true,
        maxLength: [9],
        trim: true,
    },
    preco: {type: String,
        lowercase: true,
    },
    tamanho: {type: String,
        default: ('2 litros')
    },
    tipo: {type: String,
        enum:["Bebidas", "Pizzas", "Massas", "Sobremesas"]
    },
    ingredientes: []
})

const Produto = mongoose.model('Produto', schema)

module.exports = Produto