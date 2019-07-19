const Log = require('../model/model');
const {hashPassword, checkPassword, genToken} = require('../auth.js')

const controller = {};

controller.login = async (req, res) => {
  const { pw, email } = req.body;

  try {
  const data = await Log.findUser(email)
      const passwordIsCorrect = await checkPassword(pw, data.pw)
      if(passwordIsCorrect) {
        const token = await genToken(data)
        res.json({
          data: data,
          token: token
        })
      }
    }
    catch(err) {
      res.status(500).json({ err });
    };
};


controller.getUser = async (req, res) => {
  const email = req.params.email;

  try {
    const data = await Log.findUser(email)
      res.json({
        data: data
      })
  }

  catch(err) {
    res.status(500).json({ err });
  }
};

controller.createUser = async (req, res) => {
  const { company, pw, email, phone, npc, comptype } = req.body;

  const password_digest = await hashPassword(pw);

  Log.createUser({
    company,
    pw: password_digest,
    email,
    phone,
    npc,
    comptype
  })
   .then( data => {
      res.json({
        message: 'created',
        data: data
      });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
}

//////////////////////////////////////////////

//        COP ROUTES

//////////////////////////////////////////////

controller.getProducts = async (req, res) => {

  try {
    const data = await Log.getProducts()
      res.json({
        data: data
      })
  }

  catch(err) {
    res.status(500).json({ err });
  }
};

controller.showCartItems = async (req, res) => {
  const id = req.params.id

  try {
    const data = await Log.showCartItems(id)
      res.json({
        data: data
      })
  }

  catch(err) {
    res.status(500).json({ err });
  } 
}

controller.addToCart = async (req, res) => {
  const id = req.params.id
  const { item_id, item_quantity } = req.body;

  try {
    const data = await Log.addToCart({
      item_id,
      item_quantity
    }, id)
      res.json({
        data: data
      })
  }

  catch(err) {
    res.status(500).json({ err })
  } 
}

controller.createCustomerOrder = async (req, res) => {
  const { warehouse_id, ordered_by, status, preferred_date, preferred_time, delivery_address } = req.body;

  try {
    const data = await Log.createCustomerOrder({
      warehouse_id,
      ordered_by,
      status,
      preferred_date,
      preferred_time,
      delivery_address
    })
      res.json({
        data: data
      })
  }

  catch(err) {
    res.status(500).json({ err })
  } 
}

controller.addCartItemsToOrder = async (req, res) => {
  const { item_id, item_amount, order_id } = req.body;

  try {
    const data = await Log.addCartItemsToOrder({
      item_id,
      item_amount,
      order_id
    })
      res.json({
        data: data
      })
  }

  catch(err) {
    res.status(500).json({ err })
  } 
}

controller.changeQuantity = async (req, res) => {
  const id = req.params.id
  const { item_id, item_quantity } = req.body;  

  try {
    const data = await Log.changeQuantity({
      item_id,
      item_quantity
    }, id)
      res.json({
        data: data
      })
  }

  catch(err) {
    res.status(500).json({ err })
  }
}

controller.deleteCartItem = async (req, res) => {
  const id = req.params.id

  try {
    const data = await Log.deleteCartItem(id)
    res.json({
      message: 'deleted',
      data: data
    })
  }

  catch(err) {
    res.status(500).json({ err })
  }
}

//////////////////////////////////////////////

//        WMS ROUTES

//////////////////////////////////////////////

controller.getInventory = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Log.getInventory(id)
      res.json({
        data: data
      })
  }

  catch(err) {
    res.status(500).json({ err });
  }
};

controller.getOrders = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Log.getOrders(id)
      res.json({
        data: data
      })
  }

  catch(err) {
    res.status(500).json({ err });
  }
}

controller.getOrderInv = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Log.getOrderInv(id)
    res.json({
      data: data
    })
  }

  catch(err) {
    res.status(500).json({ err })
  }
}

controller.deleteProduct = async (req, res) => {
  const id = req.params.id

  try {
    const data = await Log.deleteProduct(id)
    res.json({
      message: 'deleted',
      data: data
    })
  }

  catch(err) {
    res.status(500).json({ err })
  }
}

controller.updateProductQuantity = async (req, res) => {
  const id = req.params.id
  const { quantity } = req.body

  try {
    const data = await Log.updateProductQuantity({
      quantity: quantity
    }, id)
    res.json({
      message: 'updated',
      data: data
    })
  }

  catch(err) {
    res.status(500).json({ err })
  }
}

controller.updateOrderStatus = async (req, res) => {
  const id = req.params.id
  const { status } = req.body

  try {
    const data = await Log.updateOrderStatus({
      status: status
    }, id)
    res.json({
      message: 'updated',
      data: data
    })
  }

  catch(err) {
    res.status(500).json({ err })
  }
}

controller.updateTransportInfo = async (req, res) => {
  const id = req.params.id
  const { trucking_company, truck_driver, actual_date, actual_time } = req.body
  
  try {
    const data = await Log.updateTransportInfo({
      trucking_company,
      truck_driver,
      actual_date,
      actual_time
    }, id)
    res.json({
      message: 'updated',
      data: data
    })
  }

  catch(err) {
    res.status(500).json({ err })
  }
}


module.exports = controller;
