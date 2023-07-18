//import 'rename' function from 'fs' to rename files
const fs = require("fs");

//Import Multer and specify the folder to save files
const multer = require("multer");
const upload = multer({ dest: "./public/profil-pictures" }); // Upload Profile Pictures destination

const checkIfThereIsFile = (req, res, next) => {
  try {
    upload.single("profil-picture")(req, res, next);
  } catch (err) {
    next();
  }
};

const renameFile = (req, res, next) => {
  if (!req.file) return next(); //if there is no file

  //Getting the file name (before and after uploading)
  const { originalname } = req.file;
  const { filename } = req.file;
  const { destination } = req.file;

  //Getting picture path to store it to DB
  const finalPath = `/api/public/profil-pictures/${originalname}`;

  //Renaming the file to it original name
  fs.rename(
    `${destination}/${filename}`,
    `${destination}/${originalname}`,
    (err) => {
      if (err) return res.sendStatus(500);

      //add the object to add to DB (with the picture path)
      req.body.picture = finalPath;
      next();
    }
  );
};

module.exports = {
  checkIfThereIsFile,
  renameFile,
};
