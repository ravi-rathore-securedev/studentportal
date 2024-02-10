import dotenv from 'dotenv'
import express from "express"
import connectDB from "./src/db/index.js";

dotenv.config({
  path: './.env'
})

const app = express();

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 3000, ()=>{
      console.log(`server is running on Port: ${process.env.PORT}`);
  })
})
.catch((error)=>{
console.log("MongoDB Connection Failed",error);
})

app.get('/', (req, res) => {
  res.send('Hello World!');
});