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
      res.status(500).json({ err })
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
  const { company, pw, email, phone, npc, type } = req.body;

  const password_digest = await hashPassword(pw);

  Log.createUser({
    company,
    pw: password_digest,
    email,
    phone,
    npc,
    type
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
  const id = req.params.id

  try {
    const data = await Log.getProducts(id)
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
  const { warehouse_id, ordered_by, date_placed, tax, shipping, subtotal, status, total_weight, preferred_dates, preferred_times, delivery_address } = req.body;

  try {
    const data = await Log.createCustomerOrder({
      warehouse_id,
      ordered_by,
      date_placed,
      tax,
      shipping,
      subtotal,
      status,
      total_weight,
      preferred_dates,
      preferred_times,
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
  const { item_id, amount_ordered, order_id } = req.body;

  try {
    const data = await Log.addCartItemsToOrder({
      item_id,
      amount_ordered,
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

controller.getCustomerOrder = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Log.getCustomerOrder(id)
      res.json({
        data: data
      })
  }

  catch(err) {
    res.status(500).json({ err });
  }
}

controller.getAllCustomerOrders = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Log.getAllCustomerOrders(id)
      res.json({
        data: data
      })
  }

  catch(err) {
    res.status(500).json({ err });
  }
}

controller.addInstructions = async (req, res) => {
  const id = req.params.id
  const { instructions } = req.body

  try {
    const data = await Log.addInstructions({
      instructions
    }, id)
      res.json({
        data: data
      })
  }

  catch(err) {
    res.status(500).json({ err });
  }
}

controller.confirmCustomerOrder = async (req, res) => {
  const id = req.params.id

  try {
    const data = await Log.confirmCustomerOrder(id)
      res.json({
        data: data
      })
  }

  catch(err) {
    res.status(500).json({ err });
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

controller.emptyCart = async (req, res) => {
  const id = req.params.id

  try {
    const data = await Log.emptyCart(id)
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

controller.getWarehouseOrders = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Log.getWarehouseOrders(id)
      res.json({
        data: data
      })
  }

  catch(err) {
    res.status(500).json({ err });
  }
}

controller.getOrderById = async (req, res) => {
  const id = req.params.id

  try {
    const data = await Log.getOrderById(id)
      res.json({
        data: data
      })
  }

  catch(err) {
    res.status(500).json({ err });
  }
}

controller.getOrderInv = async (req, res) => {
  const id = req.params.id

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

controller.getEmployees = async (req, res) => {
  const id = req.params.id

  try {
    const data = await Log.getEmployees(id)
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

controller.assignEmployee = async (req, res) => {
  const id = req.params.id
  const { employee } = req.body
  console.log(employee)

  try {
    const data = await Log.assignEmployee({employee}, id)
    res.json({
      message: 'assigned',
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

controller.replenishProduct = async (req, res) => {
  const id = req.params.id

  try {
    const data = await Log.replenishProduct(id)
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

controller.orderItemIsCompleted = async (req, res) => {
  const { item_id, order_id } = req.body

  try {
    const data = await Log.orderItemIsCompleted({
      item_id,
      order_id,
    })
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

controller.updateCountRate = async (req, res) => {
  const id = req.params.id
  const {rate_of_count} = req.body
  
  try {    
    const data = await Log.updateCountRate({rate_of_count}, id)
    res.json({
      message: 'updated',
      data: data
    })
  }

  catch(err) {
    res.status(500).json({ err })
  }
}

//////////////////////////////////////////////

//        RECEIVING ROUTES

//////////////////////////////////////////////

controller.getWarehouseEmployeeOrders = async (req, res) => {
  const id = req.params.id

  try {
    const data = await Log.getWarehouseEmployeeOrders(id)
    res.json({
      data
    })
  }

  catch(err) {
    res.status(500).json({ err })
  }
}

module.exports = controller;
