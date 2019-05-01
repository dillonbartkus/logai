const express = require('express');
const router = express.Router()

const controller = require('../controller/controller')

router.post('/login', controller.login);

router.post('/users/:email', controller.getUser);

router.post('/register', controller.createUser);

router.post('/getinv/:id', controller.getInventory);

router.post('/getorders/:id', controller.getOrders);

router.post('/getorderinv/:id', controller.getOrderInv);

router.delete('/product/:id', controller.deleteProduct);

router.put('/product/:id', controller.updateProduct);

module.exports = router;
