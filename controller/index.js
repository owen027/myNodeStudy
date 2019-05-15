// 首页
exports.showIndex = async (req, res, next) =>{
    // res.status(200).send('hello world Owen')
    // 第一个文件名，第二个传参数
    res.render('index.html', {
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
}




// 创建问题
exports.showQuestions = async (req, res, next) => {
    res.render('questions/new.html')
}

