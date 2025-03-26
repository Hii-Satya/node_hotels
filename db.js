require('dotenv').config();
const mongoose=require('mongoose');
// // const mongoURL = 'mongodb://localhost:27017/hotels'

const mongoURL =process.env.mongo_URL;


if (!mongoURL) {
    console.error("❌ MONGO_URI is undefined. Check your .env file.");
    process.exit(1); // Exit process if URI is missing
}



mongoose.connect(mongoURL,{
    
            useNewUrlParser: true,
             useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB successfully"))
    .catch((err) => console.error("MongoDB connection error:", err));


const db =mongoose.connection;

db.on('connected ',()=>{
    console.log('Connected to MongoDB server');
});

db.on('error',(err)=>{
    console.error('Mongodb connection error :',err);
});

db.on('disconnected ',()=>{
    console.log('Disconnected to MongoDB server');
});

module.exports= db;