const express = require('express');
// import User from "../models/User";
const User = require('../models/User');

const router = express.Router();

//route get api/auth
//desc get all items
//@access public

router.get('/', (req, res ) =>{
    User.find()
    .sort({date:-1})
    .then(user => res.json(user));
})

router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
      .then(user => user.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false }));
  });

//route POST api/items
//desc CREATE an item
//@access public


//my old poasting method
// router.post('/', (req, res ) =>{
//     const newuser = new User({                    //this is in connection with the item created in model direcrory
//        email: req.body.email,                     //this is one of the object created in model, date is not included because it was set to default 
//        passwordHash: req.body.passwordHash
//     });

//      newuser.save().then(user => res.json(user));             //then give us back the item that is saving
// })


//new posting method
router.post('/', (req, res ) =>{
    const {credentials} = req.body;
    User.findOne({ email: credentials.email}).then(user=>{
        if (user && user.isValidPassword(credentials.password)){
            // res.json({success: true})
            // res.json({user:{email: user.email}});
            res.json({user: user.toAuthJSON() });
        }
        else{
            res.status(400).json({errors :{global: "invalid credentials"} });
        }
    });
});

// router.post("/", (req, res) => {
//     const {credentials} = req.body;
//      User.findOne({email: credentials.email})
//     //  .sort({date: -1})
//      .then(user => {
//          if(user){

//          }
//          else{
//              res.status(400).json({errors : {global : "Invalid Credentials"}})
//          }
//      })
// });

// export default auth;
module.exports = router;