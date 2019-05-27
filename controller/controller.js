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

controller.getClients = async (req, res) => {
  const id = req.params.id

  try {
    const data = await Log.getClients(id)
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

controller.updateProduct = async (req, res) => {
  const id = req.params.id
  const { quantity } = req.body

  try {
    const data = await Log.updateProduct({
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

controller.updateOrder = async (req, res) => {
  const id = req.params.id
  const { status } = req.body

  try {
    const data = await Log.updateOrder({
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


module.exports = controller;
