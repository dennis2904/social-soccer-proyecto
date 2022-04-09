const express=require('express');
const router=express.Router();

router.get('/',(req, res)=>{
    res.send('Hello WOrld');
});

module.exports=router;