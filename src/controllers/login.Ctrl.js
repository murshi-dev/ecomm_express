const sendmail=require('../helpers/sendingmail');
const insertData = require('../services/datamanipulation.service');

const getLogin = (req, res) => {

const uname=req.query.uname
const email=req.query.email
const password=req.query.password

insertData(uname,email,password)

sendmail(uname,email)

    res.render("login",{uname:uname,email:email,password:password});
  };

  

  const postLogin = (req, res) => {
    res.render("login");
  };
  const putLogin = (req, res) => {
    res.render("login");
  };
  const deleteLogin = (req, res) => {
    res.render("login");
  };
  
  module.exports = { getLogin, postLogin, putLogin, deleteLogin };
  