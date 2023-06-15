const argon2 = require("argon2");

const hashedPassword = (req, res, next) => {
  const hashingOptions = {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    timeCost: 5,
    parallelism: 1,
  };

  argon2
    .hash(req.body.password, hashingOptions)
    .then((hashedPassword) => {

      req.body.hashed_password = hashedPassword;
      delete req.body.password;
      next();

    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });

};

const hidePassword = (req, res) => {
  const users = res.users

  users.map((user) => {
    delete user.hashed_password;
  });

  res.status(200).json(users);
};


const verifyPassword = (req, res) => {

  argon2
      .verify(req.users.hashed_password, req.body.password)
      .then((isVerified) => {
          if(!isVerified){
              res.sendStatus(404);
          }else{
            
              res.status(200).send(req.users);
          }
      })
      .catch((err) => {
          console.error(err)
          res.status(500).send("Error retreiving from database")
      })

}

module.exports = {
  hashedPassword,
  hidePassword,
  verifyPassword
};