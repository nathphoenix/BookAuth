// import _ from "lodash";
//  const _ = require('lodash');

// export default function(errors){
//   const result = {};
//   _.forEach(errors, (val, key) =>{   // val is the error object and key which is the field
//     result[key] = val.message;
//   });
//   return result;
// }

const _ = require('lodash');

// module.exports = UserReg = mongoose.model('UserReg', Schema);

module.exports = parseErrors = function(errors) {
  const result = {};
  _.forEach(errors, (val, key) => {
    result[key] = val.message;
  });
  return result;
}