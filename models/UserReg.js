const mongoose = require ('mongoose');
const bcrypt = require ('bcrypt');
const jwt = require ( 'jsonwebtoken' );
const uniqueValidator = require('mongoose-unique-validator')  //this is to confirm if the email is unique
const Schema = mongoose.Schema({
  name : {
    type: String,
    required: true,
    lowercase: true,
    index: true
},
    address : {
      type: String,
      required: true,
      lowercase: true,
      index: true
},
    email : {
        type: String,
        required: true,
        lowercase: true,
        index: true,
        unique: true
    },
    passwordHash : {
        type: String,
        required: true
    },
    confirmed : {
      type : Boolean,
      default: false
  }
}, {timestamps: true}

)

Schema.methods.isValidPassword = function isValidPassword(password) {
    return bcrypt.compareSync(password, this.passwordHash);
  };

Schema.methods.generateJWT = function generateJWT(){
    return jwt.sign({                   // this is the method with which we create and encrypt our token, we then pass our parameter in the curly braces
        email : this.email     // this is done on purpose as a public data for anyone to access it
    },
    //  'secretkey'
    process.env.JWT_SECRET
     );      // the secretkey is for encryption
};

Schema.methods.toAuthJSON = function toAuthJSON(){
    return{
        name: this.name,
        address: this.address,
        email: this.email,
        confirmed: this.confirmed,
        token: this.generateJWT()       // which is another method and we define it directly above it
    }
}
  
  Schema.methods.setPassword = function setPassword(password) {
    this.passwordHash = bcrypt.hashSync(password, 10);
  };
  
  Schema.plugin(uniqueValidator, {message: "This email already exist"})  //unique validator is to avoid thesame multiple email

//   schema.methods.setConfirmationToken = function setConfirmationToken() {
//     this.confirmationToken = this.generateJWT();
//   };
  

//  export default mongoose.model("User", Schema);
  module.exports = UserReg = mongoose.model('UserReg', Schema);