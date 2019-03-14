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


controller.updateUser = (req, res) => {
  Log.updateUser({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    city: req.body.city
  },
  req.params.id)
   .then(data => {
      res.json({
        message: 'updated',
        data: res.data
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
}


module.exports = controller;
