// require('dotenv').config({path: './env'})
import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path: './.env'
})

connectDB(()=>{
  application.listen(process.env.PORT || 8000,()=>{
    console.log(`server is running at port ${process.env.PORT}`);
  })
})

.then()
.catch((error)=>{
  console.log("MoNGO connection is faield !!!",error);
})








/*
import express from "express";

const app = express()

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("error:", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listen on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error:", error);
    throw err;
  }
})();
*/
