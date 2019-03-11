const mongoose = require ('mongoose');
const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')
const Schema = mongoose.Schema({
    email : {
        type: String,
        required: true,
        lowercase: true,
        index: true
    },
    passwordHash : {
        type: String,
        required: true
    }
}, {timestamps: true}

)

Schema.methods.isValidPassword = function isValidPassword(password) {
    return bcrypt.compareSync(password, this.passwordHash);
  };

Schema.methods.generateJWT = function generateJWT(){
    return jwt.sign({                   //this is the method with which we create and encrypt our token, we then pass our parameter in the curly braces
        email : this.email     //this is done on purpose as a public data for anyone to access it
    },
    //  'secretkey'
    process.env.JWT_SECRET
     );      // the secretkey is for encryption
};

Schema.methods.toAuthJSON = function toAuthJSON(){
    return{
        email: this.email,
        token: this.generateJWT()       // which is another method and we define it directly above it
    }
}
  
//   schema.methods.setPassword = function setPassword(password) {
//     this.passwordHash = bcrypt.hashSync(password, 10);
//   };
  
//   schema.methods.setConfirmationToken = function setConfirmationToken() {
//     this.confirmationToken = this.generateJWT();
//   };
  

//  export default mongoose.model("User", Schema);
  module.exports = User = mongoose.model('User', Schema);