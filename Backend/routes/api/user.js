const express = require("express");
var cors = require('cors')
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../model/User");
const UserProfile = require("../../model/UserProfile");



  
router.post('/deleteprofile',(req, res) =>{
  console.log("inside deleteprofile")
  let deleteemail = req.body.email;
  console.log("email here " + req.body.email)
  User.findOneAndDelete({email: req.body.email}).then(customer =>{
    if(customer){
     
      return res.status(200).json({ email: "User deleted" });
    }
    else{
      return res.status(400).json({error: 'Technical error'})
    }
  })
  UserProfile.findOneAndDelete({email: req.body.email}).then(customer =>{
    if(customer){
      console.log("user deleted")
    }
    else{
      console.log("Technical error")
    }
  })
})
router.post("/register", (req, res) => {
  
  User.findOne({ email: req.body.email }).then(customer => {
      if (customer) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const uniqueUser = new User({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          phonenumber: req.body.phonenumber,
          email: req.body.email,
          password: req.body.password,
          gender: req.body.gender,
          role: req.body.role,
          jwt: req.body.jwt
        });
        const uniqueUserProfile = new UserProfile({
          email: req.body.email,
          phone: req.body.phonenumber
        })
    
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(uniqueUser.password, salt, (err, hash) => {
            if (err) throw err;
            uniqueUser.password = hash;
            uniqueUserProfile.save()
            uniqueUser.save().then(user => res.json(user)).catch(err => console.log(err));
            
          });
        });
      }
    });
  });


router.post("/login", (req, res) => {
  
  const email = req.body.email;
    const password = req.body.password;
    
    
    console.log(email);
    console.log(password);
  
    User.findOne({ email }).then(user => {
      
      if (!user) {
        return res.status(400).json({ data: "Email not found" });
      }
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          console.log("inside match")
          return res.json(user);
          
        }
          else {
          return res
            .status(400)
            .json({ data: "Password incorrect" });
        }
      });
    });
  });
  
  router.post("/forgetpassword", (req, res) => {
    console.log("hello");
    const email = req.body.email;
    console.log(email)
    User.findOne({ email }).then(customer => {
      if (customer) {
        console.log(customer)
        console.log("hello1 found")
        return res.status(200).json({ email: email});
      }
      else{
        console.log("hello2 not found")
        return res.status(400).json({ email: "Email not found"});
      }

  
  })
});
router.post("/resetpassword", (req, res) => {
  console.log("hello");
  const email = req.body.email;
  var password = req.body.password;
  console.log("email here"+email);
  console.log("password here" +password)
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) throw err;
      password = hash;
  User.findOneAndUpdate({ email },{$set:{password:password}}, {new: true}, function(err, doc){
    if (err) {
      
      return res.status(400).json({ email: email});
    }
    else{
      
      return res.status(200).json({ email: doc});
    }
  })


})
  });
});
router.post("/users",(req,res)=> {
  console.log("email here in users" + req.body.email)
  UserProfile.findOne({ email: req.body.email }).then(customer => {
     if (!customer) {
       return res.status(400).json({email: "Invalid user"})
     }
     else{
      console.log("customer in users : ",customer)
      return res.status(200).json({customer})
     
     }
      
    }
    
  )
});

router.post("/userprofile", (req, res) => {
  console.log("here" + req.body.email)
  User.findOne({ email: req.body.email }).then(customer => {
      if (customer) {
        return res.status(200).json({ customer});
      } else{
        return res.status(400).json({error: "email not found"})
      }
    });
  });

  router.post("/profileedit",(req, res) => {
    
    email = req.body.email
    bio = req.body.bio
    phone = req.body.phone
    livesin = req.body.livesin
    speaks = req.body.speaks
    works = req.body.works
    console.log("line 213 inside profile edit",email)
    UserProfile.findOne({ email }).then(customer => {
      console.log("inside user")
      if (!customer) {
        const uniqueUser = new UserProfile({
          email: req.body.email,
          bio: req.body.bio,
          phone: req.body.phone,
          livesin: req.body.livesin,
          speaks: req.body.speaks,
          works: req.body.works,
          role: req.body.role,
          image: req.file
        });
        
        uniqueUser.save().then(user => res.json(user)).catch(err => console.log(err));
        
        }
         else{
          console.log("inside if" + customer)
          UserProfile.findOneAndUpdate({ 'email':email },{$set:{'bio':bio,'phone':phone,'livesin':livesin,'speaks':speaks,'works':works}}, {new: true}, function(err, doc){
            console.log("inside 223 ",doc)
            return res.status(200).json({ doc});
          }
        
          )}
        
      })
    });

    
  module.exports = router;