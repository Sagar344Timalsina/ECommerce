const bcrypt = require("bcrypt"); 

const hashpassword = async(password) =>{
    try{
        const salt = 10; //CPU USAGES INCREASES AS VALUE INCREASES
        const hashpassword = await bcrypt.hash(password, salt);
        return hashpassword;
    }catch(error){
        console.log(error)
    }
}

const comparePassword = async(password,hashpassword) =>{
   return bcrypt.compare(password, hashpassword)
}

module.exports = {hashpassword, comparePassword};