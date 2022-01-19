require('../../settings/db.config')
var mongoose=require('mongoose')
var {Schema}=mongoose

var userStructure=new Schema({
    uname:String,
    email:String,
    password:String
})

//create table

module.exports=mongoose.model('users',userStructure)