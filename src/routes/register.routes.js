const express=require('express')

const Router=express.Router()

var { getRegister, postRegister, putRegister, deleteRegister }=require('../controllers/register.Ctrl')

//create api for home
Router.route("/register")
  .get(getRegister)
  .post(postRegister)
  .put(putRegister)
  .delete(deleteRegister);

module.exports = Router;