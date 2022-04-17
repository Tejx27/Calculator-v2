// jshint esversion:6
const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req, res){
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req , res){
  const num1=Number(req.body.FVal);
  const sym=req.body.Symbole;
  const num2=Number(req.body.SVal);
  switch(sym){
    case '+':
           const add=num1+num2;
           res.send("The Addition of '"+num1+"' and '"+num2+"' is: " +add+"");
           break;
    case '-':
           const sub=num1-num2;
           res.send("The Substraction of '"+num1+"' and '"+num2+"' is: " +sub+"");
           break;
    case '*':
            const mul=num1*num2;
            res.send("The Multipication of '"+num1+"' and '"+num2+"' is: " +mul+"");

            break;
    case '/':
             const div=num1/num2;
             res.send("The Division of '"+num1+"' and '"+num2+"' is: " +div+"");
             break;
    case '%':
            const mod=num1%num2;
            res.send("The Modules of '"+num1+"' and '"+num2+"' is: " +mod+"");
            break;
    default:
    res.send("Enter Valid Arthamatic oprator!!!!!");

  }

});

app.listen(process.env.PORT || 4000, function(){
  console.log("Server is runing on port 4000");
});
