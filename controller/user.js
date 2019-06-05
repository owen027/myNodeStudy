const User = require('../service/user')

// 检查 用户名和昵称 存在返回false
exports.check = async (req, res, next) => {
 const { username, nickname} = req.query
 let name; 
 if ( username ) {
    name = await User.findUserName(username)
 } else if ( nickname ) {
    name = await User.findNickName(username)
 }
    res.status(200).send(name? false : true)
}