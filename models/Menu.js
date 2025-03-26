const mongoose =require('mongoose');
const menuItemSchema =new mongoose.Schema({



    id:{
        type:Number,
        require:true
    },
    name :{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true  
    },
    price :{
        type:Number,
        require:true
    },
    taste:{
        type:[String],
        enum:["sour","sweet","spicy"],
        require:false
    },
    description :{
        type:String,
        require:true    
    }


})

const menuItem =mongoose.model('menuItem',menuItemSchema);
module.exports= menuItem;