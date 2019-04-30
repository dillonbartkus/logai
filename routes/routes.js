const express = require('express');
const router = express.Router()

const controller = require('../controller/controller')

router.post('/login', controller.login);

router.post('/users/:email', controller.getUser);

router.post('/register', controller.createUser);

router.post('/getinv/:id', controller.getInventory);

router.post('/getorders/:id', controller.getOrders);

// router.put('/user/:id', controller.updateUser);

// router.delete('/feed/:id', controller.destroyPost);

// router.delete('/user/:name', controller.destroyUser);

module.exports = router;
