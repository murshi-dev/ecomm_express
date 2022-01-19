const express=require('express')

const Router=express.Router()

var { getLogin, postLogin, putLogin, deleteLogin }=require('../controllers/login.Ctrl')


//create api for home
Router.route("/login")
  .get(getLogin)
  .post(postLogin)
  .put(putLogin)
  .delete(deleteLogin);

module.exports = Router;