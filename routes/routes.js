const express = require('express')
const router = express.Router()

const controller = require('../controller/controller')

router.post('/login', controller.login)

router.post('/users/:email', controller.getUser)

router.post('/register', controller.createUser)

// COP Routes

router.post('/products', controller.getProducts)

router.post('/cart/:id', controller.showCartItems)

router.post('/addtocart/:id', controller.addToCart)

router.post('/createcustomerorder', controller.createCustomerOrder)

router.post('/additemstoorder', controller.addCartItemsToOrder)

router.put('/changequantity/:id', controller.changeQuantity)

router.delete('/deletecartitem/:id', controller.deleteCartItem)

// WMS Routes

router.post('/getinv/:id', controller.getInventory)

router.post('/getorders/:id', controller.getOrders)

router.post('/getorderinv/:id', controller.getOrderInv)

router.delete('/product/:id', controller.deleteProduct)

router.put('/updateproductquantity/:id', controller.updateProductQuantity)

router.put('/updateorderstatus/:id', controller.updateOrderStatus)

router.put('/updatetransportinfo/:id', controller.updateTransportInfo)

module.exports = router