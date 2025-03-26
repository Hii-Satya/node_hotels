require('dotenv').config(); 
const express = require('express')
const app =express();
const db =require('./db');


const bodyParser =require('body-parser')
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
app.get('/',function(req,res){
    res.send('Welcome to my hotel How can i help you');
})
     const personRoutes =require('./routes/personRoutes');
        app.use('/person',personRoutes);

    const menuRoutes=require('./routes/menuRoute');
    app.use('/menu',menuRoutes);


app.listen(PORT ,()=>{
    console.log('Listening on port 3000');
})

