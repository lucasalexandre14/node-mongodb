const Revisao = require("../models/Revisao");

const RevisaoController = {
    getAll: async (req, res) => {
        const tipo = req.query.tipo;

        try {
            let alunos;

            switch (tipo) {
                case 'reprovados':
                    alunos = await Revisao.find({ notas: { $lt: 5 } });
                    break;
                case 'recuperacao':
                    alunos = await Revisao.find({ notas: { $gte: 5, $lt: 7 } });
                    break;
                case 'aprovados':
                    alunos = await Revisao.find({ notas: { $gte: 7 } });
                    break;
                default:
                    alunos = await Revisao.find({});
                    break;
            }

            res.json(alunos);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar alunos.' });
        }
    },

    get: async (req, res) => {
        try {
            res.json(await Revisao.findById(req.params.id));
        } catch (error) {
            res.status(404).json({ error: 'Registro não encontrado' });
        }
    },

    create: async (req, res) => {
        try {
            res.json(await Revisao.create(req.body));
        } catch (error) {
            res.status(400).json({ error: 'Erro ao criar registro' });
        }
    },

    update: async (req, res) => {
        try {
            const resultadoAtualizacao = await Revisao.updateMany(
                { turma: 'E' },
                { $set: { turma: 'B' } }
            );

            res.json({ message: `Foram alterados ${resultadoAtualizacao.nModified} alunos da turma E para a turma B.` });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao alterar a turma dos alunos.' });
        }
    },

    delete: async (req, res) => {
        try {
            res.json(await Revisao.findByIdAndDelete(req.params.id));
        } catch (error) {
            res.status(404).json({ error: 'Registro não encontrado' });
        }
    },
};

module.exports = RevisaoController;
