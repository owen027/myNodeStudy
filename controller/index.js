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
    const { username, password, nickname, captcha } = req.body
    const { captcha:sessionCaptcha } = req.session
    // 验证码校验会话时间
    if(+new Date() > sessionCaptcha.expires) {
        return res.status(200).json({
            code:4,
            message: '验证码已过期'
        })
    } else if (captcha.toLowerCase() !== sessionCaptcha.text.toLowerCase()) {
        //  console.log(captcha，req.session.captcha)
        // 大(toUpperCase) /小写(toLowerCase) 要转化 
        return  res.status(200).json({
              code:1,
              message: '验证码错误'
          })
    }

    if (await User.findUserName({username})) {
        res.status(200).json({
            code: 2,
            message: '用户已存在'
        })
    }
    //校验 昵称

    if (await User.findNickName({username})){
        res.status(200).json({
            code:3,
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
    req.session.captcha ={
         text:captcha.text,
         expires:+new Date() + 15*1000  //过期时间 15s
    } //存储 session
    res.type('svg') //定义响应类型
    res.status(200).send(captcha.data) //发布响应结果
}



// 创建问题
exports.showQuestions = async (req, res, next) => {
    res.render('questions/new.html')
}

