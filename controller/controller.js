const Log = require('../model/model');

const controller = {};

controller.index = (req, res) => {
  Log.findAll()
    .then(data => {
      res.json({
        message: 'ok',
        data: data
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};


controller.getUser = (req, res) => {
  Log.findUser(req.params.id)
  .then(data => {
    res.json({
      message: 'ok',
      data: data
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};


controller.createUser = (req, res) => {
  Log.createUser({
    company: req.body.company,
    pw: req.body.pw,
    email: req.body.email,
    phone: req.body.phone,
    npc: req.body.npc,
    comptype: req.body.comptype
  })
   .then( () => {
      res.json({
        message: 'created',
        data: res.data
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
}


module.exports = controller;
