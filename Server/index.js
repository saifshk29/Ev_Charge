
//server instantiate
const express = require('express');
const app = express();

//load config from the env file wil be stored in the process
require("dotenv").config();
PORT = process.env.PORT || 4000;

//middleware to parse JSON request body
app.use(express.json());

//import routes for TODOAPI

const todoRoutes = require("./routes/todo");

//mount//add/append the todo API routes
//baseurl + /routes/todo + /api/v1 + then the routes
app.use("/api/v1",todoRoutes);

//start the server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

//connect to the DATABASE

const dbConnect  = require("./config/database");
dbConnect();

//default route
app.get("/",(req,res)=>{
    res.send(`<h1>This is homepage</h1>`)
})