const express =require('express')
const router =express.Router();
const menuItem =require('../models/Menu')



        
router.post('/',async (req,res)=>{
   

    try{
        const data=req.body

        const newMenu=new menuItem(data);

        const response= await newMenu.save();
        console.log('Data Saved');
        res.status(200).json(response);
    
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server Error'});
    }
        })

        router.get('/', async(req,res)=>{
            try{
              const data=await  menuItem.find();
              console.log('Data Fetched Successful');
              res.status(200).json(data);
            }
            catch(err){
                console.log(err);
                res.status(500).json({error:'Internal server Error'});
            }
        })

        // for fetching according to categories
        router.get('/:category', async(req,res)=>{
            try{
              const categoryType =req.params.category.trim();
              if(['Desserts','Salad','Pizza','Burgers'].includes(categoryType) ){
                const response = await menuItem.find({category :categoryType });
                console.log('Response fetched');

                if (response.length === 0) {
                    return res.status(404).json({ message: 'No items found for this category' });
                }
    
                return res.status(200).json(response);
            } else {
                return res.status(400).json({ error: 'Invalid category type' });
            }
              
            }
            catch(err){
                console.log(err);
                res.status(500).json({error:'Internal server Error'});
            }
        });
// hello comment  for check
        module.exports =router;