const express = require("express");

const Router = express.Router();

var { getHome, postHome, putHome, deleteHome }=require('../controllers/home.Ctrl')

//create api for home
Router.route("/home")
  .get(getHome)
  .post(postHome)
  .put(putHome)
  .delete(deleteHome);

module.exports = Router;
