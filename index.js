const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const bodyParser = require('body-parser');
const formrouter=require("./routes/formroutes")
const searchrouter=require("./routes/searchroutes")
const filterrouter=require("./routes/filterroutes")
const deptrouter=require("./routes/deptroutes")
const fs=require("fs")
const https=require("https")

 



 

const app=express()  
require("dotenv").config()


app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ limit: "200mb",  extended: true, parameterLimit: 1000000 }));
app.use(cors()) 
app.use(express.json());   


app.use('/api/form',formrouter)
app.use('/api/search',searchrouter)
app.use('/api/filter',filterrouter)
app.use('/api/dept',deptrouter)


  
   
  
  
 
const PORT = process.env.PORT || 5000;

/*const dburl='mongodb://0.0.0.0:27017/ioaforms' FOR MONGODB COMPASS*/
const dburl=process.env.db_url


  


mongoose.connect(dburl, {  
    useNewUrlParser: true,
    useUnifiedTopology: true       
  }); 
  
  mongoose.connection.on('connected', () => {    
    console.log('Successfully connected to MongoDB');      
  });
  
 
 
app.listen(process.env.PORT,()=>{
    console.log(`http server started at port ${PORT}`)
})  

