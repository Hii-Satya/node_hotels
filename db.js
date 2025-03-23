const mongoose=require('mongoose');

const mongoURL = 'mongodb://localhost:27017/hotels'

// mongoose.connect(mongoURL ,{
//     useNewUrlParser :true,
//     useUnifiedTopology:true
// })
mongoose.connect(mongoURL)
    .then(() => console.log("Connected to MongoDB successfully"))
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