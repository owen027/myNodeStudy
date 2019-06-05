const User = require('../service/user')
const svgCaptcha = require('svg-captcha')
// 首页
exports.showIndex = async (req, res, next) => {
    res.render('index.html',{
        name: 'Owen'
    })
}
// 注册登录
exports.showLogin = async (req, res, next) => {
    res.render('login.html')
}

// 登录接口
exports.signup = async (req, res, next) => {
    // 接收前端数据
    console.log(req.body)
    const { username, password, nickname, verify_code } = req.body


    if (await User.findUserName({username})) {
        res.status(200).json({
            code: 2,
            message: '用户已存在'
        })
    }
    //校验 昵称

    if (await User.findNickName({username})){
        res.status(200).json({
            code:2,
            message:'昵称已存在'
        })
    }
    
    //创建用户
    const createUser = await User.create({
        username,
        password,
        nickname
    })

    if (createUser.id) {
        res.status(200).json({
            code: 0,
            message: ''
        })
    }

}

// 验证码
exports.captcha = async (req,res,next) =>{
    const captcha = svgCaptcha.create() //创建验证码
    res.type('svg') //定义响应类型
    res.status(200).send(captcha.data) //发布响应结果
}
exports.checkCaptcha = async (req,res,next) =>{
  const {captcha} = req.query
  const {captcha: sessionCaptcha} = req.session
    let ret = false
    captcha.toLowerCase() !== sessionCaptcha.text.toLowerCase() && (ret = true)
      return res.status(200).send(ret)
  
}



// 创建问题
exports.showQuestions = async (req, res, next) => {
    res.render('questions/new.html')
}

