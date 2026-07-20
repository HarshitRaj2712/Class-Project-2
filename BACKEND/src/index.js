const express = require('express');
const bcrypt = require('bcrypt')
const fs =require('fs');
const path =require('path');
const { json } = require('stream/consumers');
const cors =require('cors');

const app=express();
app.use(express.json());
app.use(cors());

require('dotenv').config();
const PORT=process.env.PORT;
// console.log(dotenv.config());

const filepath=path.join(__dirname,"../data/user.json");

app.get('/',(req,res)=>{
    console.log(PORT);
    res.end('Server is running')
})

app.post('/signup',(req,res)=>{
    const {name,email,password}=req.body;
    const users=JSON.parse(fs.readFileSync(filepath,'utf-8'));

    const user=users.find(u=>u.email===email);
    if(user){
        return res.status(400).json({
            message:"user already exist",
        }).end()
    }
    const hashedPassword =bcrypt.hash(password, 10);
    const newuser={
        id:users.length+1,
        name,
        email,
        password:hashedPassword
    }
    users.push(newuser);

    fs.writeFileSync(filepath,JSON.stringify(users,null,2));
    res.status(201).json({
        message:"User Registered Successfully"
    }).end()
})


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})