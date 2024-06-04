const express = require('express');
const router = express.Router();
const controllerBlague = require('../controllers')


router.get('/', (req,res)=> {
    res.status(200).json({sucess: 'RACINE API'})
});

router.get('/blague/random', controllerBlague.random);

router.get('/blagues', controllerBlague.findAll);

router.get('/blagues/:id', controllerBlague.findById);

router.post('/blagues/create', controllerBlague.create);


module.exports = router;