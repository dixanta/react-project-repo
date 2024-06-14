const express = require('express');
const controller=require('../controllers/countryController');
const router=express.Router();



router.get('/',(req,res)=>{
    controller.index(req,res);
});

router.get('/add',(req,res)=>{
    res.send('<h1>Add works</h1>');
});

module.exports=router;