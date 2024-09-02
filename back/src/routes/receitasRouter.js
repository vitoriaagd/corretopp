const { Router } = require('express');
 
const router = Router();
 
const { pawbuddy } = require('../controller/receitasController');
 
router.post('/store/receita_criar', pawbuddy);
 
module.exports = router;