require('dotenv').config();
const path = require('path')

//import 'rename' function from 'fs' to rename files
const fs = require('fs');

//import cookie parser 
const cookieParser = require('cookie-parser');

const express = require('express');
const app = express();
const port = process.env.APP_PORT ?? 5002;
const APIRouter = express.Router();

// Serve the 'public' folder for public resources
APIRouter.use('/public',  express.static(path.join(__dirname, "./public")));
console.log(path.join(__dirname, "./public"));

//package to upload images
const multer = require("multer")
const upload = multer({ dest : "./public/profil-pictures" }) // Upload Profile Pictures destination


const { db } = require("./src/config");

//route to upload a file
app.post("/api/profilpicture/:id", upload.single("profil-picture"), (req, res) => {

  //Getting the file name (before and after uploading)
  const { originalname } = req.file
  const { filename } = req.file
  const { destination } = req.file

  //Renaming the file to it original name
  fs.rename(`${destination}/${filename}`, `${destination}/${originalname}`, (err) => {
    if(err) throw err;
  });

  //Getting picture path to store it to DB
  const picPath = `${destination}/${originalname}`
  const finalPath = `/api${picPath.substring(1)}`;

   //Getting the User id
   const { id } = req.params
 
  return db.query('UPDATE users SET picture = ? WHERE id = ?', [finalPath, id])
});

const {
  userRouter,
  ideaRouter,
  locationRouter,
  categoryRouter,
} = require('./src/routes');

const { optional } = require('joi');

app.use(cookieParser());
app.use(express.json());

app.use('/api', APIRouter);

APIRouter.get('/version', function (req, res) {
  const { version } = require('./package.json');
  return res.json({ version });
}); // create route to get the package.json version

APIRouter.use('/users', userRouter);
APIRouter.use('/ideas', ideaRouter);
APIRouter.use('/locations', locationRouter);
APIRouter.use('/categories', categoryRouter);

app.listen(port, function () {
  `API is running on port ${port}`;
});
