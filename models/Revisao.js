const mongoose = require('mongoose');

const schema = mongoose.Schema({
  nomedoaluno: {
    type: String,
    required: true,
    uppercase: true,
    maxLength: [9],
    trim: true,
  },
  turma: {
    type: String,
    uppercase: true,
    enum: ['A', 'B', 'C', 'D', 'E'], // Validação para permitir apenas turmas A, B, C, D e E
  },
  notas: {
    type: [Number],
    validate: {
      validator: function (value) {
        return value.every((nota) => nota >= 0 && nota <= 10); // Validação para notas entre 0 e 10
      },
      message: 'As notas devem estar entre 0 e 10.',
    },
  },
  mediaNotas: {
    type: Number,
  },
});

// Método para calcular a média das notas antes de salvar
schema.pre('save', function (next) {
  if (this.notas && this.notas.length > 0) {
    const somaNotas = this.notas.reduce((acc, nota) => acc + nota, 0);
    this.mediaNotas = somaNotas / this.notas.length;
  } else {
    this.mediaNotas = null; // Ou outra mensagem/valor indicando que não há notas suficientes
  }
  next();
});

const Revisao = mongoose.model('Revisao', schema);

module.exports = Revisao;
