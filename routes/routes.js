const express = require('express');
const router = express.Router()

const controller = require('../controller/controller')

router.get('/users', controller.index);

router.get('/users/:id', controller.getUser)

// router.get('/feed/user/:id', controller.getPostsByUser);

// router.get('/login/:name', controller.login);

// router.get('/user/:id', controller.getUser);

// router.post('/join', controller.createUser);

// router.post('/post', controller.createPost);

// router.put('/feed/:id', controller.updatePost);

// router.put('/user/:id', controller.updateUser);

// router.delete('/feed/:id', controller.destroyPost);

// router.delete('/user/:name', controller.destroyUser);

module.exports = router;
