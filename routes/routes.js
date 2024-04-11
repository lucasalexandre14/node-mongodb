const express = require('express')
const ProdutoController = require('../controllers/ProdutoController')
const RevisaoController = require('../controllers/RevisaoController')
const Produto = require('../models/Produto')
const Revisao = require('../models/Revisao')
const router = express.Router()

router.get('/', function(req, res){
    res.json({})
})

router.get('/produtos', (req, res) => ProdutoController.getAll(req, res))
router.post('/produtos', (req, res) => ProdutoController.create(req, res))
router.get('/produtos/:id', (req, res) => ProdutoController.get(req, res))
router.put('/produtos/:id', (req, res) => ProdutoController.update(req, res))
router.delete('/produtos/:id', (req, res) => ProdutoController.delete(req, res))


router.get('/revisao', (req, res) => RevisaoController.getAll(req, res))
router.post('/revisao', (req, res) => RevisaoController.create(req, res))
router.get('/revisao/:id', (req, res) => RevisaoController.get(req, res))
router.put('/revisao/:id', (req, res) => RevisaoController.update(req, res))
router.delete('/revisao/:id', (req, res) => RevisaoController.delete(req, res))


module.exports = router