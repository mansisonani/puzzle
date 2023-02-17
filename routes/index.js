var express = require('express');
var quiz= require('../model/quiz');
var cate= require('../model/category');
var router = express.Router();
let bcrypt= require('bcrypt');

router.post('/add', async function(req, res, next){
  try {
    console.log(req.body);
    let data= await cate.create(req.body);
    console.log(data);
    res.status(201).json(
      {
        status:"sucsses",
        message:"add successfully",
        data: data
      })
     
     } catch (error) {
    res.status(404).json({
      status:"fail",
      message:error.message

    })
  }
        
});
router.get('/delete', async function(req, res, next){
  try {
    console.log(req.body);
    let id=req.query.id;
    console.log(id);
    let data= await cate.findByIdAndDelete(id);
    console.log(data);
    res.status(201).json(
      {
        status:"sucsses",
        message:"delete successfully",
        data:data
      })
     
     } catch (error) {
    res.status(404).json({
      status:"fail",
      message:error.message

    })
  }
        
});
router.post('/update', async function(req, res, next){
  try {
    console.log(req.body);
    let uid=req.query.uid;
    console.log(uid);
    let data= await cate.findByIdAndUpdate(uid, req.body);
    console.log(data);
    res.status(201).json(
      {
        status:"sucsses",
        message:"update successfully",
        data:data
      })
     
     } catch (error) {
    res.status(404).json({
      status:"fail",
      message:error.message

    })
  }
        
});
router.get('/show', async function(req, res, next){
  try {
    console.log(req.body);
    let data= await cate.find();
    console.log(data);
    res.status(201).json(
      {
        status:"sucsses",
        message:"add successfully",
        data: data
      })
     
     } catch (error) {
    res.status(404).json({
      status:"fail",
      message:error.message

    })
  }
        
});
router.post('/addquiz', async function(req, res, next){
  try {
    console.log(req.body);
    let data= await quiz.create(req.body);
    console.log(data);
    res.status(201).json(
      {
        status:"sucsses",
        message:"add successfully",
        data: data
      })
     
     } catch (error) {
    res.status(404).json({
      status:"fail",
      message:error.message

    })
  }
        
});
router.get('/deletequiz', async function(req, res, next){
  try {
    console.log(req.body);
    let id=req.query.id;
    console.log(id);
    let data= await quiz.findByIdAndDelete(id);
    console.log(data);
    res.status(201).json(
      {
        status:"sucsses",
        message:"delete successfully",
        data:data
      })
     
     } catch (error) {
    res.status(404).json({
      status:"fail",
      message:error.message

    })
  }
        
});
router.post('/updatequiz', async function(req, res, next){
  try {
    console.log(req.body);
    let uid=req.query.uid;
    console.log(uid);
    let data= await quiz.findByIdAndUpdate(uid, req.body);
    console.log(data);
    res.status(201).json(
      {
        status:"sucsses",
        message:"update successfully",
        data:data
      })
     
     } catch (error) {
    res.status(404).json({
      status:"fail",
      message:error.message

    })
  }
        
});
router.get('/showquiz', async function(req, res, next){
  try {
    console.log(req.body);
    let data= await quiz.find().populate('category');
    console.log(data);
    res.status(201).json(
      {
        status:"sucsses",
        message:"add successfully",
        data: data
      })
     
     } catch (error) {
    res.status(404).json({
      status:"fail",
      message:error.message

    })
  }
        
});
module.exports = router;
