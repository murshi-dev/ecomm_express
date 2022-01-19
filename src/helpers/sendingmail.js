var nodemailer = require("nodemailer");

function sendMail(uname, email) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "basheershome@gmail.com",
      pass: "bays5321",
    },
  });

  var mailOptions = {
    from: "basheershome@gmail.com",
    to: email,
    subject: `successfully registered`,
    text:`welcome ${uname}`
  };

  transporter.sendMail(mailOptions,(err,res)=>{
if(err){
    console.log(err)
}
else{
    console.log("mail sent")
}
  })
}



module.exports=sendMail