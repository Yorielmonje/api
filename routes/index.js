const {Router}= require('express');
const controllers = require('../controllers');

const router= Router();

router.get('/', (req, res)=> res.send('mi api de jugos soy yoriel'));
router.post('/jugos', controllers.createJugo);
router.get('/jugos', controllers.getAlljugos);
module.exports = router;
