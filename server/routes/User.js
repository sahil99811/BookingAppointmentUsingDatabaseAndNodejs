const express=require('express');
const router=express.Router();
const {addUser,deleteUser,updateUser,getUser}=require('../controllers/User');
router.post('/addUser',addUser);
router.put('/updateUser',updateUser);
router.delete('/deleteUser/:id',deleteUser);
router.get('/getUser',getUser);

module.exports = router