import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const PORT=4000
const app=express();
app.use(cors);

mongoose.connect(
    'mongodb+srv://ram:ram12345@cluster0.djxz0db.mongodb.net/?retryWrites=true&w=majority'
    ).then(()=>console.log('connected to mongodb'))
    .catch((err) => console.error(err));

app.get('/',(req,res)=>{
    res.send("Hello World");
})
app.listen(PORT, () =>{
    console.log("Server is running at http://localhost:4000");
})