// import express from'express';
const express =require('express');
const router=express.Router();
const Person=require('../models/Person')


router.get('/', async(req,res)=>{
    try{
      const data=await  Person.find();
      console.log('Data Fetched Successful');
      res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server Error'});
    }
})


router.post('/',async (req,res)=>{
   

    try{
        const data=req.body

        const newPerson=new Person(data);

        const response= await newPerson.save();
        console.log('Data Saved');
        res.status(200).json(response);
    
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server Error'});
    }
        })
    
       

        router.get('/:workType',async (req,res)=>{
            try{
                const workType=req.params.workType;
                if(workType =='manager' || workType =='chef' || workType =='waiter'  ){
                    const response=await Person.find({work : workType});
                    console.log('Response fetched');
                    res.status(200).json(response);
                }

                else{
                    res.status(404).json({error:'Worktype is Invalid'});
                }

            }
         catch(err){
            console.log(err);
            res.status(500).json({error:'Internal server Error'}); 
         }
        })

        router.put('/:id',async(req,res)=>{
            try{
                const personId =req.params.id;
                const updatedPersonData =req.body;
                const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
                    new:true,
                    runValidators:true,
                })
                if(!response) {
                    return res.status(404).json({error:'Person Not Found'});
                  }
                  console.log("Person Updated");
                  res.status(200).json({message :'Person Updated successfully'});

            }
            catch(err){
                console.log("Person Updated");
                res.status(200).json({message :'Person Updated successfully'});
            }
        })

        router.delete('/:id',async(req,res)=>{
            try{
              const  personId=req.params.id;

              const response = await Person.findByIdAndDelete(personId);

              if(!response) {
                return res.status(404).json({error:'Person Not Found'});
              }
              console.log("Person Deleted");
              res.status(200).json({message :'Person deleted successfully'});
            }
            catch(err){
                console.log(err);
                res.status(500).json({error:'Internal server Error'}); 
            }
        })


     router.put('/:id',async(req,res)=>{
            try{
                const personId =req.params.id;
                const updatedPersonData =req.body;
                const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
                    new:true,
                    runValidators:true,
                })
                if(!response) {
                    return res.status(404).json({error:'Person Not Found'});
                  }
                  console.log("Person Updated");
                  res.status(200).json({message :'Person Updated successfully'});

            }
            catch(err){
                console.log("Person Updated");
                res.status(200).json({message :'Person Updated successfully'});
            }
        })



        
module.exports =router;