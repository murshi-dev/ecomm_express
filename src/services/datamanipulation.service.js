require('../settings/db.config')
var { User } = require("../models");
function insertData(uname,email,password) {
  var user1 = new User({ uname:uname, email:email, password:password });
  user1.save();
}
module.exports=insertData 