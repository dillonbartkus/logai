const Log = require('../model/model');
const {hashPassword, checkPassword, genToken} = require('../auth.js')

const controller = {};

controller.login = async (req, res) => {
  const { pw, email } = req.body;

  Log.findUser(email)
    .then(data => {
      const passwordIsCorrect = checkPassword(pw, data.pw)
      if(passwordIsCorrect) {
        const token = genToken(data)
        res.json({
          message: 'ok',
          data: data,
          token: token
        })
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};


// controller.getUser = (req, res) => {
//   Log.findUser(req.params.id)
//   .then(data => {
//     res.json({
//       message: 'ok',
//       data: data
//     });
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json({ err });
//   });
// };


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
