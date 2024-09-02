const { Router } = require('express');
const { storeUsuario, login } = require('../controller/cadastroController');
 
const router = Router();
 
router.post('/store/usuario', storeUsuario);
router.post('/store/login', login);

 
module.exports = router;