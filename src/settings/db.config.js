var mongoose=require('mongoose')
var url="mongodb://127.0.0.1:27017/murshi"
mongoose.connect(url,(err)=>{
    if(err) throw err
    console.log("mongoose connected")
})