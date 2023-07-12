const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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
  const users = res.users;
  users.map((user) => {
    delete user.hashed_password;
  });

  res.status(200).json(users);
};

const verifyPassword = (req, res, next) => {
  argon2
    .verify(req.user.hashed_password, req.body.password)
    .then((isVerified) => {
      if (!isVerified) {
        res.sendStatus(404);
      } else {
        delete req.user.hashed_password;
        next();
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retreiving from database");
    });
};

const tokenEmission = (req, res, next) => {
  const { id, id_role, firstname, lastname, picture, id_location } = req.user;

  const payload = {
    sub: id,
    id_role: id_role,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "24h" });

  res
    .cookie("acces_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    })
    .status(200)
    .json({
      id: id,
      firstname: firstname,
      lastname: lastname,
      picture: picture,
      id_role: id_role,
      id_location: id_location,
    });
};

const authorizationUser = (req, res, next) => {
  try {
    const token = req.cookies.acces_token;
    if (!token) {
      throw new Error("Token absent");
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    console.error(err);
    return res.sendStatus(401);
  }
};

const authorizationAdmin = (req, res, next) => {
  try {
    const token = req.cookies.acces_token;
    if (!token) {
      throw new Error("Token absent");
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    if (payload.id_role === 2) {
      return next();
    } else {
      throw new Error("Vous n'avez pas l'autorisation");
    }
  } catch (err) {
    console.error(err);
    return res.sendStatus(401);
  }
};

module.exports = {
  hashedPassword,
  hidePassword,
  verifyPassword,
  tokenEmission,
  authorizationUser,
  authorizationAdmin,
};
