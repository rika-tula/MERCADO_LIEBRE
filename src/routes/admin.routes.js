// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const { create, store, edit, update, destroy } = require('../controllers/admin');


/*** CREATE ONE PRODUCT ***/ 
router.get('/crear-producto', create); 
router.post('/crear-producto', store); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/editar/:id', edit); 
router.put('/editar/:id', update); 

router.delete('/eliminar-producto/:id', destroy); 


module.exports = router;
