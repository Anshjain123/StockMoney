var jwt = require('jsonwebtoken');
const JWT_SECRET = "Our little Secret."

const authenticate = async(req, res, next)=>{
    var token = req.headers.authorization
    if(!token){
        res.send({'user':null})
    }
    const data = jwt.verify(token, JWT_SECRET); 
    req.userid = data.user.id
    // console.log(data.user.id);
    next();
}

module.exports = authenticate; 