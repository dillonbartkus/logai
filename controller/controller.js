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
      console.log(err);
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
      console.log(data)
  }

  catch(err) {
    console.log(err);
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
      console.log(err);
      res.status(500).json({ err });
    });
}


module.exports = controller;
